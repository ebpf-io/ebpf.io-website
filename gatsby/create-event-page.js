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
            frontmatter: { isFeatured: { eq: false } }
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
              date(formatString: "MMMM, DD YYYY")
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
        featuredPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $eventRegex } }
            fields: { isDraft: { in: $draftFilter } }
            frontmatter: { isFeatured: { eq: true } }
          }
          sort: { frontmatter: { date: DESC } }
          limit: 5
        ) {
          nodes {
            frontmatter {
              type
              region
              title
              description
              date(formatString: "MMMM, DD YYYY")
              place
              linkUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 967)
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
  const {
    featuredPosts: { nodes: featuredPosts },
    allPosts: { nodes: allPosts },
  } = result.data;

  function getFrontmatterData(items) {
    return items.map((item) => ({ ...item.frontmatter }));
  }

  const postEvents = getFrontmatterData(allPosts);
  const featuredEvents = getFrontmatterData(featuredPosts);

  createPage({
    path: EVENTS_BASE_PATH,
    component: path.resolve('./src/templates/events.jsx'),
    context: {
      featuredEvents,
      postEvents,
      totalCount,
    },
  });
};
