import { graphql } from 'gatsby';
import React from 'react';

import Cards from 'components/pages/newsletter/cards';
import Hero from 'components/pages/newsletter/hero';
import PreviousReleases from 'components/pages/newsletter/previous-releases';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const Newsletter = () => (
  <Layout>
    <Hero />
    <Cards />
    <PreviousReleases />
  </Layout>
);

export default Newsletter;

export const Head = () => (
  <SEO
    title="Subscribe to bi-weekly eCHO News - eBPF"
    description="Keep up on the latest news and information from the eBPF and Cilium communities"
  />
);

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared"] } }) {
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
