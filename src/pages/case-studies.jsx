/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('case-studies');

const CaseStudies = () => (
  <Layout pageUrls={pageUrls}>
    <Hero />
  </Layout>
);

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const t = JSON.parse(
    data.locales.edges.find((edge) => edge.node.language === language).node.data
  );

  return (
    <SEO
      pathname={pathname}
      title={t['eBPF - Introduction, Tutorials & Community Resources']}
      description={
        t[
          'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'
        ]
      }
    />
  );
};
export default CaseStudies;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared", "case-studies"] } }) {
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
