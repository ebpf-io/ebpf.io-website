const createBlogPostPage = require('./create-blog-post');
const createBlogPostsPage = require('./create-blog-posts');
const createEventsPage = require('./create-events');
const createGetStartedPage = require('./create-get-started');
const createLabsPage = require('./create-labs-page');
const createStaticPages = require('./create-static-pages');

const REDIRECTS = [
  {
    from: '/summit-2023-schedule/',
    to: '/summit-2023-talks/',
  },
];

module.exports = async (options) => {
  await createStaticPages(options);
  await createBlogPostsPage(options);
  await createBlogPostPage(options);
  await createEventsPage(options);
  await createGetStartedPage(options);
  await createLabsPage(options);

  const {
    actions: { createRedirect },
  } = options;

  REDIRECTS.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
