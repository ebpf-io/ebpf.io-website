# Blog

Welcome to eBPF blog! This folder contains the source code of the [eBPF blog](https://ebpf.io/blog/).

## Basic information

1. Every single Markdown file in this folder will be turned into a blog page.
2. Folder and file names should follow kebab-case.
3. There is no need to add `h1` to the page since it will be displayed automatically with the value from `title` field.

## Fields

Right now Markdown files accept following frontmatter:

1. `title` — title of the post (required)
2. `description` - description of the post (required)
3. `date` - publish date of the post (required)
4. `categories` - categories of the post (required)
5. `author` - author of the post (currently multiple authors are not supported)

   To add photo and bio of author, open the file `./src/data/post-authors.js`, and follow the template below

   ```js
   module.exports = {
     'Anais Urlichs': {
       name: 'Anais Urlichs',
       photo: '/images/post-authors/example.jpg', // photo should be added to `./static/images/post-authors/` folder
       twitterUrl: 'https://twitter.com/AnaisUrlichs',
       bio: "Heya, I'm Anais, a Developer Advocate writing about tech, in particular about DevOps and how to get started in the space. Additional topics include studies, career, and lifestyle.",
     },
   };
   ```

6. `path` - path of the post, it starts with `/blog/` (eg. `/blog/new-post`)
7. `externalUrl` - external URL to add external posts to the blog index page
8. `draft` — flag that says the post is not ready yet. It won't appear in production but will appear in the development mode.
9. `toc` — flag that turns on the display of the outline for the post. The outline gets built out of second and third-level headings ([`h2`, `h3`]), thus appears as two-level nested max.
10. `ogImage` - the social preview image of the page.

> ⚠️ Please note that the project won't build if at least one of the Markdown files is missing a required field.

## Code blocks

All available languages for code blocks can be found [here](https://prismjs.com/index.html#supported-languages).

## Images

The images should be sourced in `/content/blog-posts/` directory and be used in `.md` with the relative path

Example file structure:

```md
├── content
│ ├── blog-posts
│ ├──── 2023-01-10-zebra
│ ├────── index.md
│ ├────── ogimage.png // put images in the same directory as your .md file
```

With this approach, all images on your doc pages will be displayed both on the production and GitHub preview.

## Contributing

For small changes and spelling fixes, we recommend using the GitHub UI because Markdown files are relatively easy to edit.

For larger contributions, consider [running the project locally](../../README.md#getting-started) to see how changes look like before making a pull request.
