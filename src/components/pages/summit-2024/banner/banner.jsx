import React from 'react';

import Link from 'components/shared/link/link';

const Banner = () => (
  <section className="relative mt-40 md:mt-16 sm:mt-14">
    <div className="container">
      <div className="relative flex flex-row items-center justify-center space-x-10 rounded-lg bg-gray-98 px-6 py-[42px] md:flex-col md:space-x-0 md:space-y-6 md:py-6">
        <h2 className="heading-6xl text-left font-semibold leading-tight text-black md:text-center">
          Find all of the recordings on YouTube
        </h2>
        <Link to="/summit-2024-talks" className="" theme="black-primary-yellow" size="lg">
          View talks
        </Link>
      </div>
    </div>
  </section>
);

export default Banner;
