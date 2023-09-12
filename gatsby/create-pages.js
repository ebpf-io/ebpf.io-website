const createBlogPages = require('./create-blog-pages');
const createBlogPosts = require('./create-blog-posts');
const createEventPage = require('./create-event-page');
const createLabsPage = require('./create-labs-page');
const createStaticPages = require('./create-static-pages');

module.exports = async (options) => {
  await createStaticPages(options);
  await createBlogPages(options);
  await createBlogPosts(options);
  await createEventPage(options);
  await createLabsPage(options);
};
