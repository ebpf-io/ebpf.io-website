const path = require('path');

const { EVENTS_BASE_PATH } = require('../src/constants/event');

const { DRAFT_FILTER, EVENTS_REGEX } = require('./constants');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $eventRegex: String!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          totalCount
        }
        allPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
            frontmatter {
              type
              region
              conference
              title
              description
              date(formatString: "MMMM DD, YYYY")
              place
              linkUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 733)
                }
                publicURL
              }
            }
          }
        }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, eventRegex: EVENTS_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  const { totalCount } = result.data.allMdx;
  const {
    allPosts: { nodes: allPosts },
  } = result.data;

  function getFrontmatterData(items) {
    return items.map((item) => ({ ...item.frontmatter }));
  }

  const postEvents = getFrontmatterData(allPosts);

  createPage({
    path: EVENTS_BASE_PATH,
    component: path.resolve('./src/templates/events.jsx'),
    context: {
      postEvents,
      totalCount,
    },
  });
};
