# Labs

Welcome to eBPF labs! This folder contains the source code of the [eBPF labs](https://ebpf.io/labs/).

## Basic information

1. Each individual Markdown file in this folder will be turned into an lab card on the [Labs page](https://ebpf.io/labs/).
2. Folder and file names should follow kebab-case.

## Fields

Right now Markdown files accept following frontmatter:

1. `date` — date the lab was added. Not shown in the card, but affects the sort order of the lab in the list. (required)
2. `title` — title of the lab (required)
3. `description` — short description of the lab (required)
4. `linkUrl` — link to go for detailed information when clicking on the lab link (required)
5. `linkText` — link text at the bottom of the card. (required)
6. `ogImage` - the preview image of the card. Recommended size 976×460 px. (required)
7. `category` - category of the lab (required). Each lab can be included in several categories (but no more than two). (required)
   List of possible categories: Programming, Networking, Observability, Security, Tracing and Profiling.
   As soon as a new category is added to the lab, it will appear in the list of categories on the page.
8. `isDraft` — flag that says the post is not ready yet. It won't appear in production but will appear in the development mode.

> ⚠️ Please note that the project won't build if at least one of the Markdown files is missing a required field.

## Images

The images should be sourced in `/content/labs/` directory and be used in `.md` with the relative path

Example file structure:

```md
├── content
│ ├── labs
│ ├──── lab-name
│ ├────── index.md
│ ├────── ogimage.png // put images in the same directory as your .md file
```

## Contributing

For small changes and spelling fixes, we recommend using the GitHub UI because Markdown files are relatively easy to edit.

For larger contributions, consider [running the project locally](../../README.md#getting-started) to see how changes look like before making a pull request.
