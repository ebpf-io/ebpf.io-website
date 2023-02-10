const BLOG_BASE_PATH = '/blog/';
const BLOG_CATEGORY_BASE_PATH = '/blog/categories/';
const BLOG_POSTS_PER_PAGE = 10;

const BLOG_CATEGORIES_NAME = {
  RELEASE: 'release',
  TECHNOLOGY: 'technology',
  EXTERNAL: 'external',
  ALL_POSTS: 'all-posts',
  HOW_TO: 'how-to',
  COMMUNITY: 'community',
  UPDATE: 'update',
};

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  BLOG_BASE_PATH,
  BLOG_CATEGORY_BASE_PATH,
  BLOG_POSTS_PER_PAGE,
  BLOG_CATEGORIES_NAME,
};
