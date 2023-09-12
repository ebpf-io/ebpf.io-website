const path = require('path');

const get = require('lodash.get');

const { languages, defaultLanguage } = require('../config/languages');

const { DRAFT_FILTER, STATIC_PAGE_REQUIRED_FIELDS } = require('./constants');

const staticTemplate = path.resolve('./src/templates/static.jsx');

module.exports = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: "/content/static-pages/" } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          nodes {
            id
            internal {
              contentFilePath
            }
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER }
  );

  if (result.errors) throw new Error(result.errors);

  result.data.allMdx.nodes.forEach(({ id, internal: { contentFilePath }, frontmatter }) => {
    // Required fields validation
    STATIC_PAGE_REQUIRED_FIELDS.forEach((fieldName) => {
      if (!get(frontmatter, fieldName)) {
        throw new Error(`Static page "${contentFilePath}" does not have field "${fieldName}"!`);
      }
    });

    const pathParts = contentFilePath.split('/');

    // Extract the folder name
    const folderName = pathParts[pathParts.length - 2];
    const fileName = pathParts[pathParts.length - 1];

    // Remove language part from the folder name
    const slug = fileName.startsWith('index.')
      ? folderName.replace(/\.[a-z]{2}$/, '')
      : fileName.replace('.md', '');

    let language = defaultLanguage;

    Object.values(languages).forEach(({ code }) => {
      if (fileName.includes(`.${code}.`)) {
        language = code;
      }
    });

    const pagePath = language === defaultLanguage ? `/${slug}/` : `/${language}/${slug}/`;

    actions.createPage({
      path: pagePath,
      component: `${staticTemplate}?__contentFilePath=${contentFilePath}`,
      context: { id, language },
    });
  });
};
