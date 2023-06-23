/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Categories from 'components/pages/labs/categories';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';

const EventsPage = ({ pageContext: { labsCategories, currentCategory } }) => (
  <Layout>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
        Dig into the eBPF with our interactive labs
      </h1>
    </div>
    <Categories
      className="mb-10 mt-4"
      categories={labsCategories}
      currentCategory={currentCategory}
    />
    <SubscriptionForm size="lg" className="container" />
  </Layout>
);

export default EventsPage;

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
          buttonText
          buttonUrl
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 490)
            }
            publicURL
          }
        }
      }
    }
  }
`;
