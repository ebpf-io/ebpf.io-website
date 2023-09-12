import PropTypes from 'prop-types';
import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';

const Hero = ({ title, description, items }) => (
  <section className="hero safe-paddings mb-32 mt-20 lg:mb-28 lg:mt-16 md:mb-20 md:mt-12">
    <div className="container flex flex-col">
      <h1 className="heading-10xl text-center font-semibold leading-tight">{title}</h1>
      <p className="mx-auto mt-4 max-w-[656px] text-center text-lg xs:text-base">{description}</p>
      <CaseStudiesList className="mt-12 lg:mt-10" items={items} />
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.element.isRequired,
  items: PropTypes.array.isRequired,
};

export default Hero;
