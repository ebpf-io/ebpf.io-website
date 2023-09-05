import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';
import caseStudiesData from 'data/shared/case-studies/case-studies-list';
import SEO_DATA from 'data/shared/seo-data';

import { defaultLanguage } from '../../config/languages';

const lang = defaultLanguage;

const Description = () => (
  <span>
    Here are some of the organizations that are using eBPF in production. If you’re using eBPF and
    aren’t on this list,{' '}
    <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
      please submit a pull request
    </Link>
    .
  </span>
);

const data = {
  title: 'eBPF Case Studies',
  description: <Description />,
  items: caseStudiesData[lang],
};

const CaseStudies = () => (
  <Layout>
    <Hero {...data} />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.caseStudies} />
);

export default CaseStudies;
