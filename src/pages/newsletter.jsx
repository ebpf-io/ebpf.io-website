import { graphql } from 'gatsby';
import React from 'react';

import Cards from 'components/pages/newsletter/cards';
import Hero from 'components/pages/newsletter/hero';
import PreviousReleases from 'components/pages/newsletter/previous-releases';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'data/shared/seo-data';

const Newsletter = () => (
  <Layout>
    <Hero />
    <Cards />
    <PreviousReleases />
  </Layout>
);

export default Newsletter;

export const Head = () => <SEO {...SEO_DATA.newsletter} />;

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
