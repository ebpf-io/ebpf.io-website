/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
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

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'case-studies' && e.node.language === language
  ).node.data;
  const t = JSON.parse(dataLanguage);

  return <SEO pathname={pathname} title={t.meta.title} description={t.meta.description} />;
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
