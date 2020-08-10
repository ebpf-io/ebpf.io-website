const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

const createMetaPage = ({
  type,
  edges,
  createPage,
  itemPageTemplate,
  listPageTemplate,
  pathPrefix
}) => {
  const itemTemplate = path.resolve(itemPageTemplate);
  const listTamplate = path.resolve(listPageTemplate);

  const map = {};
  const items = [];
  edges.forEach(({ node }) => {
    (node.frontmatter[type] || []).forEach(item => {
      if (!map[item]) {
        map[item] = [];
        items.push({
          title: item,
          url: `${pathPrefix}/${item}`
        });
      }
      map[item].push(node);
    });
  });

  createPage({
    path: `${pathPrefix}/`,
    component: listTamplate,
    context: { type, items }
  });

  Object.keys(map).forEach(item => {
    const posts = map[item];
    createPage({
      path: `${pathPrefix}/${item}`,
      component: itemTemplate,
      context: {
        type,
        title: item,
        items: posts,
        parentUrl: pathPrefix
      }
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10000
      ) {
        edges {
          node {
            html
            id
            excerpt
            frontmatter {
              categories
              date
              path
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const { edges } = result.data.allMarkdownRemark;

    createPaginatedPages({
      createPage,
      edges,
      pageTemplate: path.resolve(`src/templates/blog.js`),
      paginatePost: "/blog", // old field. not remove
      pathPrefix: "/blog", // new field. not remove
      pageLength: 8
    });

    createMetaPage({
      createPage,
      edges,
      type: "tags",
      listPageTemplate: path.resolve(`src/templates/categories.js`),
      itemPageTemplate: path.resolve(`src/templates/category.js`),
      pathPrefix: "/blog/tags"
    });

    createMetaPage({
      createPage,
      edges,
      type: "categories",
      listPageTemplate: path.resolve(`src/templates/categories.js`),
      itemPageTemplate: path.resolve(`src/templates/category.js`),
      pathPrefix: "/blog/categories"
    });

    edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      });
    });

    return Promise.resolve();
  });
};
