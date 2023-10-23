import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ title, description }) => (
  <section className="safe-paddings">
    <div className="container pt-16 md:pt-8 ">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-9xl font-bold leading-tight sm:text-7xl">{title}</h1>
        <p className="mt-4 max-w-[590px] text-xl font-light md:max-w-none md:text-lg">
          {description}
        </p>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
