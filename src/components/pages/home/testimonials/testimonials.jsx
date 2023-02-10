import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React, { useState } from 'react';

import QuoteIcon from 'icons/quote.inline.svg';
import azureLogo from 'images/azure.svg';
import googleLogo from 'images/google.svg';
import isovalentLogo from 'images/isovalent.svg';
import metaLogo from 'images/meta.svg';
import netflixLogo from 'images/netflix.svg';

const animationProps = {
  initial: {
    opacity: 0,
    translateX: -20,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  transition: { ease: [0.25, 0.1, 0, 1] },
};

const items = [
  {
    logo: azureLogo,
    company: 'Microsoft Azure',
    review:
      'eBPF has resulted in a new generation of tooling that allows developers to easily diagnose problems, innovate quickly, and extend operating system functionality.',
    author: 'Mark Russinovich',
    role: 'Chief Technology Officer at Microsoft Azure, 2021',
  },
  {
    logo: googleLogo,
    company: 'Google',
    review:
      'eBPF is the future of networking for the Linux kernel and Google is pleased to be part of the evolving standard it has created.',
    author: 'Chris DiBona',
    role: 'Director of Open Source at Google, 2021',
  },
  {
    logo: isovalentLogo,
    company: 'Isovalent',
    review:
      'Even though eBPF has already found its ways into the production stacks of countless enterprises, we are still at the beginning of the innovation curve that eBPF as a technology unlocks',
    author: 'Thomas Graf',
    role: 'Chief Technology Officer at Isovalent, 2021',
  },
  {
    company: 'Meta',
    logo: metaLogo,
    review:
      'For many years, eBPF has played a critical role in accelerating the kernel development. We’re excited to support the work of the eBPF community, enabling them to build the tools needed to power the next generation of Linux system development.',
    author: 'Chris Mason',
    role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
  },
  {
    logo: netflixLogo,
    company: 'Netflix',
    review:
      'eBPF is a new type of software that provides superpower capabilities, birthing an industry of networking, performance, and security technologies. Netflix has pioneered uses of eBPF for observability, providing insight into countless areas that were previously difficult or prohibitively expensive to instrument. eBPF has helped us lower application latency and find cost savings.',
    author: 'Brendan Gregg',
    role: 'Senior performance engineer at Netflix, 2021',
  },
];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials safe-paddings -mt-[133px] overflow-hidden bg-gray-98 pt-[261px] pb-32 lg:-mt-[168px] lg:pb-24 md:-mt-[184px] md:pb-20 sm:-mt-[438px] sm:pt-[502px] sm:pb-16">
      <div className="container">
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode="wait">
            {items.map(({ review, author, role }, index) =>
              index === activeIndex ? (
                <m.figure
                  className="flex min-h-[457px] flex-col items-center lg:min-h-[465px] sm:min-h-[320px] xs:min-h-[420px]"
                  key={index}
                  {...animationProps}
                >
                  <QuoteIcon className="h-auto w-[52px] lg:w-11 sm:w-[34px]" />
                  <blockquote className="mt-6 text-center font-sans text-8xl font-normal leading-snug tracking-[0.01em] lg:mt-5 lg:text-7xl md:text-6xl sm:mt-4 sm:text-3xl">
                    {review}
                  </blockquote>
                  <figcaption className="mt-11 text-center text-lg leading-none lg:mt-10 md:mt-9 sm:mt-6 sm:text-base sm:leading-normal">
                    <span className="font-semibold">{author}</span> — <span>{role}</span>
                  </figcaption>
                </m.figure>
              ) : null
            )}
          </AnimatePresence>
        </LazyMotion>
        <ul className="scrollbar-hidden relative mt-24 flex justify-between border-b border-dashed border-gray-80 lg:mt-20 md:mt-16 md:overflow-x-auto sm:-mx-4 sm:mt-12 sm:border-b-0 sm:px-4">
          {items.map(({ logo, company }, index) => (
            <li
              className="flex shrink-0 border-dashed border-gray-80 sm:grow sm:border-b"
              key={index}
            >
              <button
                className={clsx(
                  'group relative mb-[30px] px-[22px] after:absolute after:inset-x-0 after:-bottom-[31px] after:h-px after:w-full after:transition-colors after:duration-200 lg:mb-7 lg:px-[19px] lg:after:-bottom-[29px] sm:mb-5 sm:after:-bottom-[21px]',
                  index === activeIndex ? 'after:bg-black' : 'after:bg-transparent'
                )}
                type="button"
                onClick={() => handleClick(index)}
              >
                <img
                  className={clsx(
                    'h-12 w-auto object-contain lg:h-9',
                    activeIndex === index
                      ? 'opacity-100'
                      : 'opacity-0 transition-opacity duration-200 group-hover:opacity-100'
                  )}
                  src={logo}
                  height={48}
                  alt={company}
                  loading="lazy"
                />

                <div
                  className={clsx(
                    'absolute inset-x-[22px] top-0 bottom-0 z-10 block bg-gray-80 lg:inset-x-[19px]',
                    activeIndex === index
                      ? 'opacity-0'
                      : 'opacity-100 transition-opacity duration-200 group-hover:opacity-0'
                  )}
                  style={{
                    maskImage: `url('${logo}')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url('${logo}')`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
