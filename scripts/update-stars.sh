#!/usr/bin/env bash

set -euo pipefail

GITHUB_TOKEN="${GITHUB_TOKEN:-}"

DATA_FILES=(
    "src/data/pages/applications/emerging.json"
    "src/data/pages/applications/major.json"
)

# Build a GraphQL query that fetches stargazerCount for all repos at once.
# Each repo gets an alias like "repo0", "repo1", etc.
# Returns a JSON object mapping each alias to its owner/name/stargazerCount.
build_graphql_query() {
    local projects="$1"
    local length

    length=$(echo "${projects}" | jq 'length')

    local query="query {"
    for ((i = 0; i < length; i++)); do
        local gh_url owner_repo owner name
        gh_url=$(echo "${projects}" | jq -r ".[$i].github")
        owner_repo="${gh_url#https://github.com/}"
        owner="${owner_repo%%/*}"
        name="${owner_repo#*/}"

        query+=" repo${i}: repository(owner: \"${owner}\", name: \"${name}\") { stargazerCount }"
    done
    query+=" }"

    echo "${query}"
}

# Run a GraphQL query against the GitHub API and return the JSON response.
run_graphql_query() {
    local query="$1"
    local body

    body=$(jq -n --arg q "${query}" '{ query: $q }')

    curl -f \
        -H "Authorization: Bearer ${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -X POST \
        -d "${body}" \
        https://api.github.com/graphql
}

# Collect all projects (name + github URL + current stars) from a data file.
get_projects_from_file() {
    local file="$1"

    jq '[ .[] | { name: .name, github: (.urls[] | select(.label=="GitHub").url), stars: .githubStars } ]' \
        "${file}"
}

# Update the star count for a single project in a data file.
update_file() {
    local file="$1" name="$2" stars="$3"

    jq --arg name "${name}" --arg stars "${stars}" \
        '(.[] | select(.name == $name) | .githubStars) = ($stars | tonumber)' \
        "${file}" > "${file}.tmp"
    mv "${file}.tmp" "${file}"
}

process_file() {
    local file="$1"
    local projects projects_nb query response

    echo "Processing ${file}"

    projects=$(get_projects_from_file "${file}")
    projects_nb=$(echo "${projects}" | jq 'length')

    query=$(build_graphql_query "${projects}")
    echo "  Fetching stars for ${projects_nb} projects with GraphQL query..."
    response=$(run_graphql_query "${query}")

    # Check for errors in the response
    errors=$(echo "${response}" | jq '.errors // empty')
    if [[ -n "${errors}" ]]; then
        echo "  GraphQL errors:" >&2
        echo "${errors}" | jq . >&2
        exit 1
    fi

    for ((i = 0; i < projects_nb; i++)); do
        local name old_stars new_stars
        name=$(echo "${projects}" | jq -r ".[$i].name")
        old_stars=$(echo "${projects}" | jq -r ".[$i].stars")
        new_stars=$(echo "${response}" | jq ".data.repo${i}.stargazerCount")

        if [[ "${new_stars}" == "null" || -z "${new_stars}" ]]; then
            echo "  WARNING: could not fetch stars for ${name}, skipping" >&2
            continue
        fi

        printf '  [%02u/%02u] %s: %s -> %s\n' "$((i + 1))" "${projects_nb}" "${name}" "${old_stars}" "${new_stars}"
        update_file "${file}" "${name}" "${new_stars}"
    done
}

process_all_files() {
    for file in "${DATA_FILES[@]}"; do
        process_file "$file"
    done
}

process_all_files
