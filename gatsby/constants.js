const DRAFT_FILTER = process.env.NODE_ENV === 'production' ? [false] : [true, false];
const POSTS_REGEX = '/content/blog-posts/((?!README).)*$/';
const POST_REQUIRED_FIELDS = ['title', 'description', 'date', 'categories'];
const STATIC_PAGE_REQUIRED_FIELDS = ['title'];

const EVENTS_REGEX = '/content/events/((?!README).)*$/';
const EVENT_REQUIRED_FIELDS = [
  'title',
  'description',
  'date',
  'type',
  'region',
  'place',
  'linkUrl',
];

module.exports = {
  DRAFT_FILTER,
  POSTS_REGEX,
  POST_REQUIRED_FIELDS,
  STATIC_PAGE_REQUIRED_FIELDS,
  EVENTS_REGEX,
  EVENT_REQUIRED_FIELDS,
};
