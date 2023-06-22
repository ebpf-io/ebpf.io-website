/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';

const EventsPage = ({
  pageContext: { labsCategories, pageCount, currentPageIndex, categorySlug },
  data: {
    allMdx: { nodes: allLabs },
  },
}) => {
  console.log('labsCategories', labsCategories);
  console.log('postLabs', allLabs);
  console.log('totalCount', pageCount);
  console.log('allCategories', currentPageIndex);
  console.log('allCategories', categorySlug);
  return (
    <Layout>
      <div className="container flex flex-col pt-20 lg:pt-16">
        <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
          Dig into the eBPF with our interactive labs
        </h1>
      </div>
      <SubscriptionForm size="lg" />
    </Layout>
  );
};

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
