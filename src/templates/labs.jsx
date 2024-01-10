/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { navigate } from 'gatsby';
import React from 'react';

import Categories from 'components/pages/labs/categories';
import LabsList from 'components/pages/labs/labs-list';
import Layout from 'components/shared/layout';
import Pagination from 'components/shared/pagination';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import { LABS_BASE_PATH } from 'constants/labs';
import data from 'data/pages/labs';
import SEO_DATA from 'data/shared/seo-data';

const pageUrls = {
  en: '/labs/',
  'fr-fr': '/fr-fr/labs/',
  pt: '/pt/labs/',
  'pt-br': '/pt-br/labs/',
  'it-it': '/it-it/labs/',
  'zh-cn': '/zh-cn/labs/',
  sw: '/sw/labs/',
};

const LabsPage = ({
  pageContext: {
    labsCategories,
    pageCount,
    currentPageIndex,
    categorySlug,
    currentCategory,
    language,
  },
  data: {
    allMdx: { nodes: allLabs },
  },
}) => {
  const labs = allLabs.map((lab) => ({ ...lab.frontmatter }));
  const handlePageChange = ({ selected }) => {
    let navigatePath = '';
    if (categorySlug) {
      navigatePath = selected === 0 ? categorySlug : `${categorySlug}/${selected + 1}`;
    } else {
      navigatePath = selected === 0 ? LABS_BASE_PATH : `${LABS_BASE_PATH}/${selected + 1}`;
    }
    navigate(navigatePath);
  };

  return (
    <Layout lang={language} pageUrls={pageUrls}>
      <section className="safe-paddings">
        <div className="container flex flex-col pt-20 lg:pt-16">
          <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
            {data[language].title}
          </h1>
        </div>
      </section>
      {labsCategories.length > 2 && (
        <Categories
          className="mb-10 mt-4"
          categories={labsCategories}
          currentCategory={currentCategory}
        />
      )}
      <LabsList labs={labs} />
      {pageCount > 1 && (
        <Pagination
          className="container-md mb-20 lg:mb-16"
          pageCount={pageCount}
          currentPageIndex={currentPageIndex}
          handlePageChange={handlePageChange}
        />
      )}
      <div className="container-md">
        <SubscriptionForm
          className="mb-24 lg:mb-20"
          {...data[language].subscriptionForm}
          size="md"
          isVertical
        />
      </div>
    </Layout>
  );
};

export default LabsPage;

export const Head = ({ location: { pathname }, pageContext: { language } }) => (
  <SEO pathname={pathname} {...SEO_DATA.home[language]} />
);

export const query = graphql`
  query LabsPageQuery(
    $limit: Int!
    $skip: Int!
    $draftFilter: [Boolean]!
    $labsRegex: String!
    $category: [String]
  ) {
    allMdx(
      filter: {
        internal: { contentFilePath: { regex: $labsRegex } }
        frontmatter: { category: { in: $category } }
        fields: { isDraft: { in: $draftFilter } }
      }
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          category
          title
          description
          date(formatString: "DD MMM, YYYY")
          linkText
          linkUrl
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 976)
            }
            publicURL
          }
        }
      }
    }
  }
`;
