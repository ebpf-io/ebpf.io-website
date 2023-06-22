const path = require('path');

const { LABS_BASE_PATH, LABS_PER_PAGE } = require('../src/constants/labs');
const slugifyCategory = require('../src/utils/slugify-category');

const { DRAFT_FILTER, LABS_REGEX } = require('./constants');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query ($draftFilter: [Boolean]!, $labsRegex: String!) {
        allMdx(
          filter: {
            internal: { contentFilePath: { regex: $labsRegex } }
            fields: { isDraft: { in: $draftFilter } }
          }
        ) {
          totalCount
          group(field: { frontmatter: { category: SELECT } }) {
            fieldValue
          }
          nodes {
            frontmatter {
              category
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
    { draftFilter: DRAFT_FILTER, labsRegex: LABS_REGEX }
  );

  if (result.errors) throw new Error(result.errors);

  const { group: groupedCategories, totalCount, nodes: allLabs } = result.data.allMdx;

  const allLabsCategory = { name: 'All labs', slug: '' };
  const categories = [
    allLabsCategory,
    ...groupedCategories.map(({ fieldValue }) => ({
      name: fieldValue,
      slug: slugifyCategory(fieldValue),
    })),
  ];

  const pageCount = Math.ceil(totalCount / LABS_PER_PAGE);

  const context = {
    labsCategories: categories,
    draftFilter: DRAFT_FILTER,
    limit: LABS_PER_PAGE,
    labsRegex: LABS_REGEX,
  };

  Array.from({ length: pageCount }).forEach((_, i) => {
    const pagePath = i === 0 ? LABS_BASE_PATH : `${LABS_BASE_PATH}${i + 1}`;

    createPage({
      path: pagePath,
      component: path.resolve('./src/templates/labs.jsx'),
      context: {
        currentPageIndex: i,
        pageCount,
        skip: i * LABS_PER_PAGE,
        ...context,
      },
    });
  });

  categories.forEach(({ name, slug }) => {
    const categoryPosts = allLabs.filter(
      ({ frontmatter: { category }, internal: { contentFilePath } }) => {
        // Required category validation
        if (!category && !category?.length) {
          throw new Error(`Post "${contentFilePath}" does not have field "category"!`);
        }

        return category.includes(name);
      }
    );

    const categoryPageCount = Math.ceil(categoryPosts.length / LABS_PER_PAGE);

    Array.from({ length: categoryPageCount }).forEach((_, i) => {
      const pagePath = i === 0 ? `${LABS_BASE_PATH}${slug}` : `${LABS_BASE_PATH}${slug}/${i + 1}`;

      createPage({
        path: pagePath,
        component: path.resolve('./src/templates/labs.jsx'),
        context: {
          category: name,
          categorySlug: slug,
          currentPageIndex: i,
          pageCount: categoryPageCount,
          skip: i * LABS_PER_PAGE,
          ...context,
        },
      });
    });
  });
};
