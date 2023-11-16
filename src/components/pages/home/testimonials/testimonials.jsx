import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
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

const logos = {
  azure: azureLogo,
  google: googleLogo,
  isovalent: isovalentLogo,
  meta: metaLogo,
  netflix: netflixLogo,
};

const Testimonials = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials safe-paddings -mt-[133px] overflow-hidden bg-gray-98 pb-32 pt-[261px] lg:-mt-[168px] lg:pb-24 md:-mt-[184px] md:pb-20 sm:-mt-[438px] sm:pb-16 sm:pt-[502px]">
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
          {items.map(({ logo, logoWidth, company }, index) => (
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
                  src={logos[logo]}
                  width={logoWidth}
                  height={48}
                  alt={company}
                  loading="lazy"
                />

                <div
                  className={clsx(
                    'absolute inset-x-[22px] bottom-0 top-0 z-10 block bg-gray-80 lg:inset-x-[19px]',
                    activeIndex === index
                      ? 'opacity-0'
                      : 'opacity-100 transition-opacity duration-200 group-hover:opacity-0'
                  )}
                  style={{
                    maskImage: `url('${logos[logo]}')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url('${logos[logo]}')`,
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

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      logoWidth: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Testimonials;
