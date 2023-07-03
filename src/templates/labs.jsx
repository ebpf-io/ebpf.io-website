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

const LabsPage = ({
  pageContext: { labsCategories, pageCount, currentPageIndex, categorySlug, currentCategory },
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
    <Layout>
      <section className="safe-paddings">
        <div className="container flex flex-col pt-20 lg:pt-16">
          <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
            Dig into eBPF with interactive labs
          </h1>
        </div>
      </section>
      <Categories
        className="mb-10 mt-4"
        categories={labsCategories}
        currentCategory={currentCategory}
      />
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
        <SubscriptionForm size="md" className="mb-24 lg:mb-20" isVertical="true" />
      </div>
    </Layout>
  );
};

export default LabsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;

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
