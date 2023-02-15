/* eslint-disable react/prop-types */
import React from 'react';

import Documentation from 'components/pages/get-started/documentation/documentation';
import Hero from 'components/pages/get-started/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <Documentation />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
