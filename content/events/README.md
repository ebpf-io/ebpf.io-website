# Blog

Welcome to eBPF events! This folder contains the source code of the [eBPF events](https://ebpf.io/events/).

## Basic information

1. Each individual Markdown file in this folder will be turned into an event card on the Events page.
2. Folder and file names should follow kebab-case.
3. There is no need to add `h1` to the page since it will be displayed automatically with the value from `title` field.

## Fields

Right now Markdown files accept following frontmatter:

1. `date` — publish date of the post (required)
2. `place` — location of the event. For Webinar type specify - online (required)
3. `title` — title of the post (required)
4. `description` — short description of the post (required)
5. `linkUrl` — link to go for detailed information when clicking on the event card (required)
6. `type` — event type. Three types are available: Meetup, Webinar and Conference (required)
7. `region` — region, four options available: APAC, EMEA, North America, Online (required)
8. `conference` — if the event type is a Conference, you can specify what type or leave it empty.
   Five options available: eBPF Summit, Cloud Native eBPF Day, eBPF Track (LPC), bpfconf (LSF/MM/BPF)
9. `draft` — flag that says the post is not ready yet. It won't appear in production but will appear in the development mode.
10. `ogImage` - the preview image of the card.

> ⚠️ Please note that the project won't build if at least one of the Markdown files is missing a required field.

## Images

The images should be sourced in `/content/events/` directory and be used in `.md` with the relative path

Example file structure:

```md
├── content
│ ├── events
│ ├──── 2023-01-10-ebpf-summit
│ ├────── index.md
│ ├────── ogimage.png // put images in the same directory as your .md file
```

## Contributing

For small changes and spelling fixes, we recommend using the GitHub UI because Markdown files are relatively easy to edit.

For larger contributions, consider [running the project locally](../../README.md#getting-started) to see how changes look like before making a pull request.
