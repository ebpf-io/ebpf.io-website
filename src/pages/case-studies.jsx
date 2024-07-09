/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/case-studies';
import SEO_DATA from 'data/shared/seo-data';

const CaseStudies = () => {
  const { language } = useI18next();

  return (
    <Layout pageUrls={data.pageUrls}>
      <Hero {...data[language].hero} />
    </Layout>
  );
};

export const Head = ({ location: { pathname } }) => {
  const { language } = useI18next();

  return <SEO pathname={pathname} {...SEO_DATA.caseStudies[language]} />;
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
