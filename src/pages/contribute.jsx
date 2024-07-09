/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Hero from 'components/pages/contribute/hero';
import HowToContribute from 'components/pages/contribute/how-to-contribute';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/contribute';
import SEO_DATA from 'data/shared/seo-data';

const Contribute = () => {
  const { language } = useI18next();

  return (
    <Layout pageUrls={data.pageUrls}>
      <Hero {...data[language].hero} />
      <HowToContribute {...data[language].howToContribute} />
    </Layout>
  );
};

export const Head = ({ location: { pathname } }) => {
  const { language } = useI18next();

  return <SEO pathname={pathname} {...SEO_DATA.contribute[language]} />;
};

export default Contribute;

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
