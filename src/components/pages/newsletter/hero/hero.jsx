import React from 'react';

import SubscribeForm from './subscribe-form';

const Hero = () => (
  <section className="hero safe-paddings mt-32 lg:mt-24 md:mt-20 sm:mt-14">
    <div className="container text-center">
      <h1 className="heading-11xl font-semibold leading-dense tracking-[-0.01em] sm:mx-auto sm:max-w-[510px]">
        Subscribe to bi-weekly eCHO News
      </h1>
      <p className="mt-5 text-xl md:text-lg">
        Keep up on the latest news and information from the eBPF and Cilium communities
      </p>
      <SubscribeForm />
    </div>
  </section>
);

export default Hero;
