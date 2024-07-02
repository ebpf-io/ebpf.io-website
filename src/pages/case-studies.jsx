/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const pageUrls = {
  en: '/case-studies/',
  'fr-fr': '/fr-fr/case-studies/',
  pt: '/pt/case-studies/',
  'pt-br': '/pt-br/case-studies/',
  'it-it': '/it-it/case-studies/',
  es: '/es/case-studies/',
  'zh-cn': '/zh-cn/case-studies/',
  sw: '/sw/case-studies/',
  'tw-cn': '/tw-cn/case-studies/',
};

const CaseStudies = () => (
  <Layout pageUrls={pageUrls}>
    <Hero />
  </Layout>
);

export const Head = ({ location: { pathname } }) => {
  const { t } = useTranslation();

  return <SEO pathname={pathname} {...t('case-studies:meta', { returnObjects: true })} />;
};

export default CaseStudies;

export const query = graphql`
  query {
    locales: allLocale {
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
