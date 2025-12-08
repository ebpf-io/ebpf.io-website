import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import hexagonBg from '../../summit-2024/last-year/images/hexagon-background.svg';
import shape1 from '../../summit-2024/last-year/images/shape-1.svg';
import shape2 from '../../summit-2024/last-year/images/shape-2.svg';
import shape3 from '../../summit-2024/last-year/images/shape-3.svg';
import shape4 from '../../summit-2024/last-year/images/shape-4.svg';

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section
    className="relative overflow-hidden pb-32 pt-40 after:absolute after:left-0 after:top-0 after:-z-20 after:h-full after:w-full after:bg-gray-98 lg:pt-32 md:pb-20 md:pt-20"
    id="last-year-summit"
  >
    <div className="container">
      <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 lg:grid-cols-1">
        <div className="flex max-w-[546px] flex-col items-start">
          <h2 className="heading-9xl font-bold leading-none">{title}</h2>
          <p className="mt-5 text-left text-xl leading-normal md:text-lg">{description}</p>
          <Link
            className="mt-7 text-lg leading-none"
            theme="underline"
            to={link.url}
            target={link.target}
          >
            {link.title}
          </Link>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/5pvDi6y6LrM"
            frameBorder="0"
            width={592}
            height={333}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded YouTube"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute left-1/2 top-1/2 -z-10 h-[1015px] w-[1501px] max-w-none translate-x-[calc(-50%+3rem)] translate-y-[calc(-50%-13.5rem)] md:hidden"
          width={1501}
          height={1015}
          loading="lazy"
          src={hexagonBg}
          alt=""
          aria-hidden
        />
        <ul className="mx-auto mt-[8.5rem] grid max-w-[760px] grid-cols-4 place-items-center gap-x-10 gap-y-8 lg:mt-32 lg:max-w-[740px] lg:gap-x-[82px] md:mt-28 md:max-w-[400px] md:grid-cols-2 md:gap-x-8 sm:mt-24">
          {items.map(({ number, unit, textColor, numberColor }, index) => {
            const isTextBlack = textColor === 'black';
            const isNumberOrange = numberColor === 'orange';
            return (
              <li className="relative max-w-[160px] lg:min-w-[140px]" key={index}>
                <img
                  src={shapes[index]}
                  alt=""
                  width={160}
                  height={188}
                  loading="lazy"
                  aria-hidden
                />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-0.5 text-center">
                  <span
                    className={clsx(
                      'text-[64px] font-semibold leading-none lg:text-5xl md:text-6xl xs:text-5xl',
                      isNumberOrange ? 'text-primary-orange' : 'text-white'
                    )}
                  >
                    {number}
                  </span>
                  <span
                    className={clsx(
                      'text-base font-medium leading-none',
                      isTextBlack ? 'text-black' : 'text-white'
                    )}
                  >
                    {unit}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);
LastYear.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      textColor: PropTypes.oneOf(['black', 'white']).isRequired,
      numberColor: PropTypes.oneOf(['white', 'orange']).isRequired,
    })
  ).isRequired,
};

export default LastYear;
