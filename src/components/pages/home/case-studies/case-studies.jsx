import PropTypes from 'prop-types';
import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';

const CaseStudies = ({ title, linkText, linkUrl, items }) => (
  <section className="case-studies safe-paddings my-36 lg:my-28 md:my-24">
    <div className="container flex flex-col items-center">
      <h2 className="heading-8xl text-center font-semibold leading-tight">{title}</h2>
      <CaseStudiesList
        className="relative mt-10"
        items={items}
        linkText={linkText}
        linkUrl={linkUrl}
      />
    </div>
  </section>
);

CaseStudies.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CaseStudies;
