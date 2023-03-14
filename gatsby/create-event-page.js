const path = require('path');

const { EVENTS_BASE_PATH, EVENT_PER_PAGE } = require('../src/constants/event');

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
        featuredPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { isDraft: { in: $draftFilter } }
            frontmatter: { isFeatured: { eq: true } }
          }
        ) {
          nodes {
            frontmatter {
              type
              title
              description
              date
              place
              linkUrl
              image {
                childImageSharp {
                  gatsbyImageData(width: 10)
                }
                publicURL
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
  const { featuredPosts } = result.data;

  const pageCount = Math.ceil(totalCount / EVENT_PER_PAGE);

  const context = {
    draftFilter: DRAFT_FILTER,
    limit: EVENT_PER_PAGE,
    eventRegex: EVENTS_REGEX,
  };

  Array.from({ length: pageCount }).forEach((_, i) => {
    const pagePath = i === 0 ? EVENTS_BASE_PATH : `${EVENTS_BASE_PATH}${i + 1}`;

    createPage({
      path: pagePath,
      component: path.resolve('./src/templates/events.jsx'),
      context: {
        featuredPosts,
        currentPageIndex: i,
        pageCount,
        skip: i * EVENT_PER_PAGE,
        ...context,
      },
    });
  });
};
