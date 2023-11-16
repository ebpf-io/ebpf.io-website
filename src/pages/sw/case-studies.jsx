import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';
import data from 'data/pages/case-studies';
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages.sw.code;

const Description = () => (
  <span>
    Hapa kuna baadhi ya mashirika yanayotumia eBPF kwa uzalishaji. Ikiwa unatumia eBPF na hauko
    kwenye orodha hii,{' '}
    <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
      tafadhali wasilisha ombi la uchukuzi
    </Link>
    .
  </span>
);

const CaseStudies = () => (
  <Layout lang={lang} pageUrls={data.pageUrls}>
    <Hero {...data[lang].hero} description={<Description />} />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.caseStudies[lang]} />
);

export default CaseStudies;
