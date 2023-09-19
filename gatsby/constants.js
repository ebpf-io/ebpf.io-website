const DRAFT_FILTER = process.env.NODE_ENV === 'production' ? [false] : [true, false];

const BLOG_POST_TEMPLATE = './src/templates/blog-post.jsx';
const BLOG_POSTS_TEMPLATE = './src/templates/blog.jsx';
const EVENTS_TEMPLATE = './src/templates/events.jsx';
const GET_STARTED_TEMPLATE = './src/templates/get-started.jsx';

const BLOG_POSTS_REGEX = '/content/blog-posts/((?!README).)*$/';
const EVENTS_REGEX = '/content/events/((?!README).)*$/';
const CONTRIBUTORS_REGEX = '/content/contributors/((?!README).)*$/';
const LABS_REGEX = '/content/labs/((?!README).)*$/';

const STATIC_PAGE_REQUIRED_FIELDS = ['title'];
const BLOG_POST_REQUIRED_FIELDS = ['title', 'description', 'date', 'categories'];
const EVENT_REQUIRED_FIELDS = [
  'title',
  'description',
  'date',
  'type',
  'region',
  'place',
  'linkUrl',
];
const CONTRIBUTORS_REQUIRED_FIELDS = ['title', 'description', 'linkUrl', 'ogImage'];

module.exports = {
  DRAFT_FILTER,
  BLOG_POST_TEMPLATE,
  BLOG_POSTS_TEMPLATE,
  EVENTS_TEMPLATE,
  GET_STARTED_TEMPLATE,
  BLOG_POSTS_REGEX,
  EVENTS_REGEX,
  CONTRIBUTORS_REGEX,
  STATIC_PAGE_REQUIRED_FIELDS,
  BLOG_POST_REQUIRED_FIELDS,
  EVENT_REQUIRED_FIELDS,
  CONTRIBUTORS_REQUIRED_FIELDS,
  LABS_REGEX,
};
