const path = require('path');

const blogPostTemplate = path.resolve('./src/templates/blog-post.jsx');
const get = require('lodash.get');

const { DRAFT_FILTER, POSTS_REGEX, POST_REQUIRED_FIELDS } = require('./constants');

module.exports = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $postRegex: String!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $postRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          nodes {
            id
            frontmatter {
              externalUrl
              path
              title
              description
              date
              categories
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, postRegex: POSTS_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  result.data.allMdx.nodes.forEach(({ id, frontmatter, internal: { contentFilePath } }) => {
    const { externalUrl, path: pagePath } = frontmatter;
    // Required fields validation
    if (!externalUrl && !pagePath) {
      throw new Error(
        `Blog post "${contentFilePath}" does not have field "path" or "externalUrl"!`
      );
    }
    POST_REQUIRED_FIELDS.forEach((fieldName) => {
      if (!get(frontmatter, fieldName)) {
        throw new Error(`Blog post "${contentFilePath}" does not have field "${fieldName}"!`);
      }
    });

    if (pagePath) {
      actions.createPage({
        path: pagePath,
        component: `${blogPostTemplate}?__contentFilePath=${contentFilePath}`,
        context: { id, pagePath },
      });
    }
  });
};
