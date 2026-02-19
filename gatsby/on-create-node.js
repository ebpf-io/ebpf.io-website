// eslint-disable-next-line import/no-extraneous-dependencies
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

module.exports = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.frontmatter) {
    createNodeField({
      node,
      name: 'isDraft',
      value: node.frontmatter.draft || false,
    });

    createNodeField({
      node,
      name: 'isExternal',
      value: !!node.frontmatter.externalUrl,
    });

    createNodeField({
      node,
      name: 'author',
      value: node.frontmatter.author || '',
    });
  }

  if (node.body) {
    createNodeField({
      node,
      name: 'html',
      value: md.render(node.body),
    });
  }

  if (node.internal.contentFilePath) {
    // /Users/vanny/projects/ebpf-gatsby/content/static-pages/what-is-ebpf/index.md
    // if the end of the path is index.md, then we want to take the second to last item in the array
    // /Users/vanny/projects/ebpf-gatsby/content/static-pages/what-is-ebpf.md
    // otherwise, we want to take the last item in the array
    const isIndex = node.internal.contentFilePath.match('index.md');
    const index = isIndex ? -2 : -1;

    const slug = node.internal.contentFilePath.replace('.md', '').split('/').slice(index)[0];

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
