import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import illustration from './images/illustration.svg';

const Hero = ({ title, description, buttonText, buttonUrl }) => (
  <section className="overflow-hidden">
    <div className="container relative flex items-center justify-between space-x-5 lg:flex-col lg:items-stretch lg:space-y-14 lg:space-x-0">
      <div className="max-w-[592px] shrink-0 py-20 lg:max-w-full lg:pb-0 lg:pt-10 lg:text-center">
        <h1 className="heading-11xl font-bold leading-dense">{title}</h1>
        <p className="mt-5 max-w-[488px] text-xl lg:mx-auto">{description}</p>
        <Button
          className="mt-6 rounded-lg px-8 md:h-[44px] sm:w-full"
          to={buttonUrl}
          theme="black-filled"
          size="sm"
        >
          {buttonText}
        </Button>
      </div>
      <img
        className="absolute top-1/2 -right-44 -z-10 max-w-[782px] -translate-y-1/2 xl:-right-32 xl:max-w-[700px] lg:hidden"
        src={illustration}
        width={782}
        height={449}
        alt=""
        loading="eager"
        aria-hidden
      />
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Hero;
