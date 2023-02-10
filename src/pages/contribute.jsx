import React from 'react';

import Hero from 'components/pages/contribute/hero';
import HowToContribute from 'components/pages/contribute/how-to-contribute';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'data/seo-data';

const Contribute = () => (
  <Layout>
    <Hero />
    <HowToContribute />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.contribute} />
);

export default Contribute;
