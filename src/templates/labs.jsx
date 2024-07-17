/* eslint-disable react/prop-types */
import { graphql, navigate } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Categories from 'components/pages/labs/categories';
import LabsList from 'components/pages/labs/labs-list';
import Layout from 'components/shared/layout';
import Pagination from 'components/shared/pagination';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import { LABS_BASE_PATH } from 'constants/labs';
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('labs');

const LabsPage = ({
  pageContext: { labsCategories, pageCount, currentPageIndex, categorySlug, currentCategory },
  data: {
    allMdx: { nodes: allLabs },
  },
}) => {
  const { t } = useTranslation();
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
    <Layout pageUrls={pageUrls}>
      <section className="safe-paddings">
        <div className="container flex flex-col pt-20 lg:pt-16">
          <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
            {t('title')}
          </h1>
        </div>
      </section>
      {labsCategories.length > 2 && (
        <Categories
          className="mt-4 mb-10"
          categories={labsCategories}
          currentCategory={currentCategory}
        />
      )}
      <LabsList labs={labs} />
      {pageCount > 1 && (
        <Pagination
          className="mb-20 container-md lg:mb-16"
          pageCount={pageCount}
          currentPageIndex={currentPageIndex}
          handlePageChange={handlePageChange}
        />
      )}
      <div className="container-md">
        <SubscriptionForm className="mb-24 lg:mb-20" size="md" isVertical />
      </div>
    </Layout>
  );
};

export default LabsPage;

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'labs' && e.node.language === language
  ).node.data;
  const t = JSON.parse(dataLanguage);

  return <SEO pathname={pathname} title={t.meta.title} description={t.meta.description} />;
};

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

    locales: allLocale(filter: { ns: { in: ["shared", "labs"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
