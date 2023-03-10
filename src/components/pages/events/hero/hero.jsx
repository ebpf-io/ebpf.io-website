import PropTypes from 'prop-types';
import React from 'react';

const title =
  'Participate in eBPF events that highlight</br>a range of expert voices and inspiring ideas';

const Hero = ({ items }) => (
  <section className="safe-paddings py-20 lg:pt-16 md:pb-10">
    <div className="container flex flex-col">
      <h1
        className="heading-9xl pb-12 font-semibold leading-tight lg:pb-8"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid-gap grid w-full grid-cols-12">{items}</div>
    </div>
  </section>
);

Hero.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
