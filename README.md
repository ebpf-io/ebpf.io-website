[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

# ebpf.io Website

This is the source code for the website [ebpf.io](https://www.ebpf.io). For more information, see the [contribute](https://ebpf.io/contribute) page.

## How to contribute

1. Clone the repo
2. yarn install
3. yarn run develop
4. open http://localhost:8000
5. make changes in: pages/index.js for landing page, or posts/ folder for blog posts
6. everytime you save, localhost:8000 will auto-reload with new preview
7. commit all your new changes to a branch, and submit the PR


## Local development

You can use `-p` to set the custom port and `-H` to set the custom host like beblow. Find more from [gatsbyjs document](https://www.gatsbyjs.com/docs/gatsby-cli/)

```bash
yarn run develop -p 8080 -H 0.0.0.0
```

