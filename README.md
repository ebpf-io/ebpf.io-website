[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

[![](src/assets/logo.png)](https://ebpf.io)

# ebpf.io Website

This is the source code for the website [ebpf.io](https://ebpf.io).
For more information, see the [contribute](https://ebpf.io/contribute) page.

## How to contribute

1. Clone the repo
2. `yarn install`
3. `yarn run develop`
4. Open http://localhost:8000 in your browser
5. Make changes in: src/pages/index.en.js for landing page, or posts/ folder
   for blog posts
6. Everytime you save, localhost:8000 will auto-reload with a new preview
7. Commit all your changes to a branch, and submit the PR

## Local development

You can use `-p` to set the custom port and `-H` to set the custom host like
below. Find more from
[Gatsby's documentation](https://www.gatsbyjs.com/docs/gatsby-cli/).

```bash
yarn run develop -p 8080 -H 0.0.0.0
```

## Contact

Open an issue, or better yet, reach out on [Slack](https://ebpf.io/slack/).
