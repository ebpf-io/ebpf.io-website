import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';
import caseStudiesData from 'data/case-studies/case-studies-list';

const items = caseStudiesData.slice(0, 6);
const CaseStudies = () => (
  <section className="case-studies safe-paddings mt-36 lg:mt-28 md:mt-24">
    <div className="container flex flex-col items-center">
      <h2 className="heading-8xl text-center font-semibold leading-tight">
        Organizations in every industry use eBPF in production
      </h2>
      <CaseStudiesList
        className="mt-10"
        items={items}
        linkText="More case studies"
        linkUrl="/case-studies"
      />
    </div>
  </section>
);

export default CaseStudies;
