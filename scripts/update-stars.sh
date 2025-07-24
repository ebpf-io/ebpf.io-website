#!/usr/bin/env bash

set -euo pipefail

GITHUB_TOKEN="${GITHUB_TOKEN:-}"

DATA_FILES=(
    "src/data/pages/applications/emerging.json"
    "src/data/pages/applications/major.json"
)

get_projects_from_file() {
    local file="$1"

    jq '[ .[] | { name: .name, github: (.urls[] | select(.label=="GitHub").url), stars: .githubStars } ]' \
        "${file}"
}

get_project() {
    local projects="$1" index="$2"

    echo "${projects}" | jq ".[$index]"
}

projects_nb() {
    local project="$1"
    echo "${project}" | jq 'length'
}

project_name() {
    local project="$1"
    echo "${project}" | jq -r '.name'
}

project_gh_repo() {
    local project="$1"
    echo "${project}" | jq -r '.github'
}

project_stars() {
    local project="$1"
    echo "${project}" | jq -r '.stars'
}

get_stars_count() {
    local gh_repo="$1" repo_path

    # Use the 'gh' CLI
    #repo_path="repos/${gh_repo#https://github.com/}"
    #gh api "${repo_path}" --jq '.stargazers_count'

    # Use the 'curl' command
    url="https://api.github.com/repos/${gh_repo#https://github.com/}"
    headers=(
        '-H "Accept: application/vnd.github+json"'
        "-H 'Authorization: Bearer ${GITHUB_TOKEN}'"
        '-H "X-GitHub-Api-Version: 2022-11-28"'
    )
    curl -L "${headers[@]}" "${url}" | jq '.stargazers_count'
}

print_progress() {
    local current="$1" total="$2"
    printf '  [%02u/%02u] ' "${current}" "${total}"
}

update_file() {
    local file="$1" name="$2" stars="$3"

    jq --arg name "${name}" --arg stars "${stars}" \
        '(.[] | select(.name == $name) | .githubStars) = ($stars | tonumber)' \
        "${file}" > "${file}.tmp"
    mv "${file}.tmp" "${file}"
}

process_project() {
    local project="$1" file="$2"
    local name stars gh_repo
    local stars_update

    name=$(project_name "${project}")
    stars=$(project_stars "${project}")
    gh_repo=$(project_gh_repo "${project}")

    echo "  Processing project: ${name}"
    echo "    repository: ${gh_repo}, stars: ${stars}"

    stars_update=$(get_stars_count "${gh_repo}")
    echo "    new stars count: ${stars_update}"

    update_file "${file}" "${name}" "${stars_update}"
}

process_file() {
    local file="$1" projects_nb
    echo "Processing ${file}"

    projects="$(get_projects_from_file "${file}")"
    projects_nb="$(projects_nb "${projects}")"

    for ((i = 0; i < projects_nb; i++)); do
        project="$(get_project "${projects}" "${i}")"
        print_progress "$((i + 1))" "${projects_nb}"
        process_project "${project}" "${file}"
    done
}

process_all_files() {
    for file in "${DATA_FILES[@]}"; do
        process_file "$file"
    done
}

process_all_files
