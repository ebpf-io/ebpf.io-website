import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';
import Link from 'components/shared/link';
import caseStudiesData from 'data/case-studies/case-studies-list';

const Hero = () => (
  <section className="hero safe-paddings mt-20 mb-32 lg:mt-16 lg:mb-28 md:mt-12 md:mb-20">
    <div className="container flex flex-col">
      <h1 className="heading-10xl text-center font-semibold leading-tight">eBPF Case Studies</h1>
      <p className="mx-auto mt-4 max-w-[656px] text-center text-lg xs:text-base">
        Here are some of the organizations that are using eBPF in production. If you’re using eBPF
        and aren’t on this list,{' '}
        <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
          please submit a pull request
        </Link>
        .
      </p>
      <CaseStudiesList className="mt-12 lg:mt-10" items={caseStudiesData} />
    </div>
  </section>
);

export default Hero;
