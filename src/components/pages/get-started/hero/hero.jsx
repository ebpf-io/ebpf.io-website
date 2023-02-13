// import clsx from 'clsx';
import React from 'react';

// import Link from 'components/shared/link/link';
// import Button from 'components/shared/button';

// import CheckIcon from './images/check.inline.svg';
// import diagramMobile from './images/diagram-mobile.svg';
// import diagram from './images/diagram.svg';

// const items = [
//   {
//     image: '',
//     title: '',
//     description: '',
//     bgClassName: '',
//     linkUrl: '',
//     linkText: '',
//   },
// ];

const Hero = () => (
  <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-14 sm:mt-11">
    <div className="container flex flex-col items-center">
      <h1 className="heading-10xl text-center font-semibold leading-tight">
        Get Started with eBPF
      </h1>

      <p className="max-w-[680px] pt-[12px] text-center text-lg leading-normal ">
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised.
      </p>

      <ul className="mt-14 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
        {/* {items.map(({ image, title, description, bgClassName }, index) => (
          <li className={clsx(bgClassName, 'flex rounded-lg sm:flex-col')} key={index}>
            <img
              className="lg:w-[184px] lg:object-cover md:w-40 sm:mx-auto sm:w-[264px]"
              src={image}
              alt={title}
              width={264}
              height={264}
              loading="lazy"
            />

            <h3 className="font-sans text-3xl font-semibold leading-snug lg:text-2xl">{title}</h3>
            <p className="mt-3 lg:mt-2.5 lg:text-sm md:text-base">{description}</p>
            <Link to="#">{text}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  </section>
);

export default Hero;
