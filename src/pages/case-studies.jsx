import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'data/seo-data';

const CaseStudies = () => (
  <Layout>
    <Hero />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.caseStudies} />
);

export default CaseStudies;
