import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link/link';

import ciliumSvg from './images/cilium.svg';
import gitKernelSvg from './images/git-kernel.svg';
import kernelSvg from './images/kernel.svg';
import redditSvg from './images/reddit.svg';
import stackoverflowSvg from './images/stackoverflow.svg';
import wikipediaSvg from './images/wikipedia.svg';

const images = {
  wikipedia: wikipediaSvg,
  stackoverflow: stackoverflowSvg,
  reddit: redditSvg,
  cilium: ciliumSvg,
  kernel: kernelSvg,
  gitKernel: gitKernelSvg,
};

const Documentation = ({ title, items }) => (
  <section className="hero safe-paddings md:pt-26 pt-32 lg:pt-20" id="docs">
    <div className="container flex flex-col items-center">
      <h2 className="heading-8xl text-center font-semibold leading-tight">{title}</h2>

      <ul className="mt-14 grid w-full grid-cols-2 md:mt-12 sm:mt-10 sm:grid-cols-1">
        {items.map(({ title, image, linkUrl, description }, index) => (
          <li
            className={clsx(
              'flex border-l border-t border-dashed border-gray-80 ',
              '[&:nth-child(-n+2)]:border-t-0 [&:nth-child(odd)]:border-l-0',
              'md:[&:nth-child(2n+1)]:border-l-0',
              'sm:w-full sm:border-l-0 sm:px-0 sm:first:pt-0 sm:last:pb-0 sm:[&:nth-child(-n+2)]:border-t sm:[&:nth-child(odd)]:border-l-0'
            )}
            key={index}
          >
            <Link
              className="group flex w-full items-center justify-between p-10 lg:p-8 sm:px-0 sm:py-6"
              to={linkUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex max-w-full items-start md:flex-col sm:flex-row xs:flex-col">
                <img
                  className="h-[60px] w-[60px]"
                  src={images[image]}
                  alt={title}
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div className="ml-5 flex flex-col md:ml-0 md:mt-5 sm:ml-5 sm:mt-0 xs:ml-0 xs:mt-5">
                  <h3 className="text-3xl font-semibold leading-tight transition-colors duration-200 group-hover:text-gray-40 md:text-2xl">
                    {title}
                  </h3>
                  <span className="mt-1 text-lg leading-snug md:text-base sm:text-lg">
                    {description}
                  </span>
                </div>
              </div>

              <Button className="ml-10" theme="withYellowChevron">
                <span className="sr-only">{description}</span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Documentation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Documentation;
