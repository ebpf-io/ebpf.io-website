const path = require("path");
const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const slugify = require("slugify");

const createMetaPage = ({
  type,
  edges,
  createPage,
  itemPageTemplate,
  listPageTemplate,
  pathPrefix,
}) => {
  const itemTemplate = path.resolve(itemPageTemplate);
  const listTemplate = path.resolve(listPageTemplate);

  const map = {};
  const items = [];
  edges.forEach(({ node }) => {
    (node.frontmatter[type] || []).forEach((item) => {
      if (!map[item]) {
        map[item] = [];
        items.push({
          title: item,
          url: `${pathPrefix}/${item}`,
        });
      }
      map[item].push(node);
    });
  });

  createPage({
    path: `${pathPrefix}/`,
    component: listTemplate,
    context: { type, items },
  });

  Object.keys(map).forEach((item) => {
    const posts = map[item];
    createPage({
      path: `${pathPrefix}/${item}`,
      component: itemTemplate,
      context: {
        type,
        title: item,
        items: posts,
        parentUrl: pathPrefix,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      html: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;
  // "Country" must start with a capital letter
  createRedirect({
    fromPath: "/",
    force: true,
    toPath: "/fr-fr/",
    Country: "fr",
  });
  createRedirect({
    fromPath: "/",
    force: true,
    toPath: "/zh-cn/",
    Country: "cn",
  });
  // "Language" must start with a capital letter
  createRedirect({
    fromPath: "/",
    force: true,
    toPath: "/fr-fr/",
    Language: "fr",
  });
  createRedirect({
    fromPath: "/",
    force: true,
    toPath: "/zh-cn/",
    Language: "zh",
  });
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
              externalUrl
              path
              title
              isFeatured
              ogImage {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const { edges } = result.data.allMarkdownRemark;
    const allowedCategories = [
      "update",
      "technology",
      "how-to",
      "release",
      "community",
      "external"
    ];

    edges.forEach(({ node }) => {
      node.frontmatter.categories.forEach((category) => {
        if (!allowedCategories.includes(category.toLowerCase())) {
          return Promise.reject(
            `Category - ${category} is not allowed in the posts`
          );
        }
      });
    });

    createPaginatedPages({
      createPage,
      edges,
      pageTemplate: path.resolve(`src/templates/blog.js`),
      paginatePost: "/blog", // old field. not remove
      pathPrefix: "/blog", // new field. not remove
      pageLength: 10,
    });

    edges.forEach(({ node }) => {
      const { path } = node.frontmatter;

      if (!path) {
        return;
      }

      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {},
      });
    });

    const categories = _(edges)
      .map((item) => _.get(item, ["node", "frontmatter", "categories"], []))
      .flatten()
      .map((item) => slugify(item, {lower:true}))
      .uniq()
      .value();

    categories.forEach((category) => {
      const filteredEdges = edges.filter(({ node }) =>
        node.frontmatter.categories
          .map((category) => slugify(category, {lower:true}))
          .includes(category)
      );

      createPaginatedPages({
        createPage,
        edges: filteredEdges,
        pageTemplate: path.resolve(`src/templates/blog.js`),
        paginatePost: `/blog/categories/${category}`, // old field. not remove
        pathPrefix: `/blog/categories/${category}`, // new field. not remove
        pageLength: 10,
      });
    });

    return Promise.resolve();
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.frontmatter) {
    createNodeField({
      node,
      name: "categories",
      value: node.frontmatter.categories || Array.of("*"),
    });
    createNodeField({
      node,
      name: "isFeatured",
      value: node.frontmatter.isFeatured || false,
    });
    createNodeField({
      node,
      name: "ogImageUrl",
      value: node.frontmatter.ogImageUrl || "",
    });
    createNodeField({
      node,
      name: "externalUrl",
      value: node.frontmatter.externalUrl || "",
    });
  }
};
