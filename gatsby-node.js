const path = require("path");
const createPaginatedPages = require("gatsby-paginate");
const _ = require('lodash');

const createMetaPage = ({
  type,
  edges,
  createPage,
  itemPageTemplate,
  listPageTemplate,
  pathPrefix
}) => {
  const itemTemplate = path.resolve(itemPageTemplate);
  const listTemplate = path.resolve(listPageTemplate);

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
    component: listTemplate,
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      html: String
    }
  `
  createTypes(typeDefs);
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/post.js`);

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
    const allowedCategories = ['update', 'blog post']

    edges.forEach(({ node }) => {
      node.frontmatter.categories.forEach(category => {
        if(!allowedCategories.includes(category.toLowerCase())) {
          return Promise.reject(`Category - ${category} is not allowed in the posts`);
        }
      })
    })

    createPaginatedPages({
      createPage,
      edges,
      pageTemplate: path.resolve(`src/templates/blog.js`),
      paginatePost: "/blog", // old field. not remove
      pathPrefix: "/blog", // new field. not remove
      pageLength: 8
    });

    edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}
      });
    });

    const tags = _(edges)
      .map((item) => _.get(item, ['node', 'frontmatter', 'tags'], []))
      .flatten()
      .map((item) => item.toLowerCase().replace(' ', '-'))
      .uniq()
      .value();

    tags.forEach(tag => {
      const filteredEdges = edges.filter(({ node }) => node.frontmatter.tags.map(tag => tag.toLowerCase().replace(' ', '-')).includes(tag))

      createPaginatedPages({
        createPage,
        edges: filteredEdges,
        pageTemplate: path.resolve(`src/templates/blog.js`),
        paginatePost: `/blog/tags/${tag}`, // old field. not remove
        pathPrefix: `/blog/tags/${tag}`, // new field. not remove
        pageLength: 8
      });
    });

    return Promise.resolve();
  });
};
