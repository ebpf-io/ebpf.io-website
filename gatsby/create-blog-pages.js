const path = require('path');

const {
  BLOG_BASE_PATH,
  BLOG_CATEGORY_BASE_PATH,
  BLOG_POSTS_PER_PAGE,
} = require('../src/constants/blog');
const slugifyCategory = require('../src/utils/slugify-category');

const { DRAFT_FILTER, POSTS_REGEX } = require('./constants');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $postRegex: String!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $postRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          totalCount
          group(field: { frontmatter: { categories: SELECT } }) {
            fieldValue
          }
          nodes {
            frontmatter {
              categories
            }
            internal {
              contentFilePath
            }
          }
        }
        externalPosts: allMdx(
          filter: {
            internal: { contentFilePath: { regex: $postRegex } }
            fields: { isExternal: { eq: true } }
          }
        ) {
          totalCount
          nodes {
            frontmatter {
              externalUrl
            }
            fields {
              isExternal
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, postRegex: POSTS_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  const { group: groupedCategories, totalCount, nodes: allPosts } = result.data.allMdx;
  const { externalPosts } = result.data;

  const preferredCategories = ['Community', 'Technology', 'How-To'];
 
  const categories = groupedCategories
    .filter(({ fieldValue }) => preferredCategories.includes(fieldValue))
    .map(({ fieldValue }) => ({ name: fieldValue, slug: slugifyCategory(fieldValue) }));

  const pageCount = Math.ceil(totalCount / BLOG_POSTS_PER_PAGE);

  const context = {
    categories,
    draftFilter: DRAFT_FILTER,
    limit: BLOG_POSTS_PER_PAGE,
    postRegex: POSTS_REGEX,
  };

  Array.from({ length: pageCount }).forEach((_, i) => {
    const pagePath = i === 0 ? BLOG_BASE_PATH : `${BLOG_BASE_PATH}${i + 1}`;

    createPage({
      path: pagePath,
      component: path.resolve('./src/templates/blog.jsx'),
      context: {
        currentPageIndex: i,
        pageCount,
        skip: i * BLOG_POSTS_PER_PAGE,
        ...context,
      },
    });
  });

  categories.forEach(({ name, slug }) => {
    const categoryPosts = allPosts.filter(
      ({ frontmatter: { categories }, internal: { contentFilePath } }) => {
        // Required categories validation
        if (!categories && !categories?.length) {
          throw new Error(`Post "${contentFilePath}" does not have field "categories"!`);
        }

        return categories.includes(name);
      }
    );

    const categoryPageCount = Math.ceil(categoryPosts.length / BLOG_POSTS_PER_PAGE);

    Array.from({ length: categoryPageCount }).forEach((_, i) => {
      const pagePath =
        i === 0
          ? `${BLOG_CATEGORY_BASE_PATH}${slug}`
          : `${BLOG_CATEGORY_BASE_PATH}${slug}/${i + 1}`;

      createPage({
        path: pagePath,
        component: path.resolve('./src/templates/blog.jsx'),
        context: {
          category: name,
          categorySlug: slug,
          currentPageIndex: i,
          pageCount: categoryPageCount,
          skip: i * BLOG_POSTS_PER_PAGE,
          ...context,
        },
      });
    });
  });

  const externalPageCount = Math.ceil(externalPosts.totalCount / BLOG_POSTS_PER_PAGE);

  Array.from({ length: externalPageCount }).forEach((_, i) => {
    const pagePath =
      i === 0
        ? `${BLOG_CATEGORY_BASE_PATH}external`
        : `${BLOG_CATEGORY_BASE_PATH}external/${i + 1}`;

    createPage({
      path: pagePath,
      component: path.resolve('./src/templates/blog.jsx'),
      context: {
        category: 'External',
        categorySlug: 'external',
        currentPageIndex: i,
        pageCount: externalPageCount,
        skip: i * BLOG_POSTS_PER_PAGE,
        isExternal: true,
        ...context,
      },
    });
  });
};
