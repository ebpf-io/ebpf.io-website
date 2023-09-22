const path = require('path');

const { languages, defaultLanguage } = require('../config/languages');

const {
  DRAFT_FILTER,
  GET_STARTED_TEMPLATE,
  EVENTS_REGEX,
  BLOG_POSTS_REGEX,
  CONTRIBUTORS_REGEX,
} = require('./constants');

const template = path.resolve(GET_STARTED_TEMPLATE);

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query (
        $draftFilter: [Boolean]!
        $eventsRegex: String!
        $blogPostsRegex: String!
        $contributorsRegex: String!
      ) {
        events: allMdx(
          limit: 3
          filter: {
            internal: { contentFilePath: { regex: $eventsRegex } }
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
        blogPosts: allMdx(
          limit: 3
          filter: {
            internal: { contentFilePath: { regex: $blogPostsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
            frontmatter {
              categories
              title
              description
              date(formatString: "DD MMM, YYYY")
              externalUrl
              path
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 733)
                }
                publicURL
              }
            }
          }
        }
        contributors: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $contributorsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
          sort: { frontmatter: { order: ASC } }
        ) {
          nodes {
            frontmatter {
              title
              description
              linkUrl
              ogImage {
                childImageSharp {
                  gatsbyImageData(width: 248)
                }
                publicURL
              }
            }
          }
        }
      }
    `,
    {
      draftFilter: DRAFT_FILTER,
      eventsRegex: EVENTS_REGEX,
      blogPostsRegex: BLOG_POSTS_REGEX,
      contributorsRegex: CONTRIBUTORS_REGEX,
    }
  );

  if (result.errors) throw new Error(result.errors);

  const {
    events: { nodes: events },
    blogPosts: { nodes: blogPosts },
    contributors: { nodes: contributors },
  } = result.data;

  Object.values(languages).forEach(({ code }) => {
    const pagePath = code === defaultLanguage ? '/get-started/' : `/${code}/get-started/`;

    createPage({
      path: pagePath,
      component: template,
      context: {
        events,
        blogPosts,
        contributors,
        language: code,
      },
    });
  });
};
