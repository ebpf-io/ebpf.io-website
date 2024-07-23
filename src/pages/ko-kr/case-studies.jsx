import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';
import data from 'data/pages/case-studies';
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages['ko-kr'].code;

const Description = () => (
  <span>
    후술되는 내용은 eBPF를 프로덕션 환경에서 사용하고 있는 단체의 목록입니다. 만일 여러분이 eBPF를
    사용하고 있지만, 목록에 없다면{' '}
    <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
      pull request를 제출해주세요
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
