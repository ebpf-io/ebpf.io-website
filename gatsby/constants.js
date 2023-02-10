const DRAFT_FILTER = process.env.NODE_ENV === 'production' ? [false] : [true, false];
const POSTS_REGEX = '/content/blog-posts/((?!README).)*$/';
const POST_REQUIRED_FIELDS = ['title', 'description', 'date', 'categories'];
const STATIC_PAGE_REQUIRED_FIELDS = ['title'];

module.exports = {
  DRAFT_FILTER,
  POSTS_REGEX,
  POST_REQUIRED_FIELDS,
  STATIC_PAGE_REQUIRED_FIELDS,
};
