import React from 'react';

import Hero from 'components/pages/contribute/hero';
import HowToContribute from 'components/pages/contribute/how-to-contribute';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/contribute';
import SEO_DATA from 'data/shared/seo-data';

import { defaultLanguage } from '../../config/languages';

const lang = defaultLanguage;

const Contribute = () => (
  <Layout>
    <Hero {...data[lang].hero} />
    <HowToContribute {...data[lang].howToContribute} />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.contribute} />
);

export default Contribute;
