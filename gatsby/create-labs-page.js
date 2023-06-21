const path = require('path');

const { LABS_BASE_PATH } = require('../src/constants/labs');

const { DRAFT_FILTER, LABS_REGEX } = require('./constants');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $labsRegex: String!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $labsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          totalCount
        }
        allCategories: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $labsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          group(field: { frontmatter: { category: SELECT } }) {
            fieldValue
          }
        }
        allPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $labsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
            frontmatter {
              category
              title
              description
              buttonText
              buttonUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 550)
                }
              }
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, labsRegex: LABS_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  const { totalCount } = result.data.allMdx;
  const { allCategories } = result.data;
  const {
    allPosts: { nodes: allPosts },
  } = result.data;

  const postLabs = allPosts.map((labs) => ({ ...labs.frontmatter }));

  createPage({
    path: LABS_BASE_PATH,
    component: path.resolve('./src/templates/labs.jsx'),
    context: {
      postLabs,
      allCategories,
      totalCount,
    },
  });
};
