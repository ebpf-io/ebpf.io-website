const createBlogPostPage = require('./create-blog-post');
const createBlogPostsPage = require('./create-blog-posts');
const createEventsPage = require('./create-events');
const createGetStartedPage = require('./create-get-started');
const createStaticPages = require('./create-static-pages');

module.exports = async (options) => {
  await createStaticPages(options);
  await createBlogPostsPage(options);
  await createBlogPostPage(options);
  await createEventsPage(options);
  await createGetStartedPage(options);
};
