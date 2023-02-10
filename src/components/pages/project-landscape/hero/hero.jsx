import React from 'react';

import Link from 'components/shared/link';

const items = [
  {
    text: 'Applications',
    to: '/applications/',
  },
  {
    text: 'Infrastructure',
    to: '/infrastructure/',
  },
];

const Hero = () => (
  <section className="hero safe-paddings mt-7">
    <div className="container flex justify-center">
      <div className="mx-auto flex justify-center space-x-8 border-b-2 border-gray-94 text-xl font-bold text-gray-50">
        {items.map(({ text, to }, index) => (
          <Link
            className="pb-3.5 transition-colors duration-200 hover:text-black"
            activeClassName="text-black relative after:absolute after:w-full after:h-0.5 after:bg-primary-yellow after:inset-x-0 after:-bottom-0.5 after:transition-all after:duration-200 after:ease-in-out"
            key={index}
            to={to}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
