/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/contribute/hero';
import HowToContribute from 'components/pages/contribute/how-to-contribute';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('contribute');

const Contribute = () => (
  <Layout pageUrls={pageUrls}>
    <Hero />
    <HowToContribute />
  </Layout>
);

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'contribute' && e.node.language === language
  ).node.data;
  const t = JSON.parse(dataLanguage);

  return (
    <SEO
      pathname={pathname}
      title={t.meta.title}
      description={t.meta.description}
      keywords={t.meta.keywords}
    />
  );
};
export default Contribute;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared", "contribute"] } }) {
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
