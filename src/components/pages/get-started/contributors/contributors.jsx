import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared/image-universal';
import Link from 'components/shared/link/link';
import githubLogo from 'images/github.svg';

const Contributors = ({ items, className }) => (
  <section className={clsx('safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14', className)}>
    <div className="container">
      <h2 className="heading-8xl text-center font-semibold leading-tight">
        Meet some of the most important eBPF contributors
      </h2>
      <div className="container grid-gap-x mt-14 grid auto-rows-min grid-cols-12 justify-items-stretch gap-y-16 xl:gap-y-14 lg:gap-y-10 md:mt-11 sm:mt-8 sm:flex sm:flex-col sm:gap-y-8">
        {items.map(({ title, description, ogImage, linkUrl }, index) => {
          const imageUrl = ogImage?.publicURL;
          return (
            <Link
              className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 md:col-span-6 sm:col-span-12"
              to={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {(ogImage || imageUrl) && (
                <ImageUniversal
                  gatsbyClassName="rounded h-[248px] w-[249px] md:w-full"
                  gatsbyImgClassName="mix-blend-multiply rounded object-left-top md:object-center"
                  svgClassName="mix-blend-multiply rounded h-[248px] w-[249px] object-contain"
                  imageSrc={ogImage}
                  imageUrl={imageUrl}
                  width={248}
                  height={248}
                  alt={title}
                />
              )}
              <div className="mt-[18px] inline-flex w-full items-center md:justify-center">
                <h3 className="mr-2 font-sans text-xl font-semibold leading-tight sm:text-xl">
                  {title}
                </h3>
                <img
                  className="h-5 w-5"
                  src={githubLogo}
                  width={20}
                  height={20}
                  alt=""
                  loading="lazy"
                />
              </div>
              <span className="mt-1.5 w-full text-base font-light leading-snug text-gray-40 md:text-center">
                {description}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

Contributors.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      linkUrl: PropTypes.string,
      ogImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object,
        }),
        publicURL: PropTypes.string,
      }),
    }).isRequired
  ).isRequired,
  className: PropTypes.string,
};

Contributors.defaultProps = {
  className: null,
};

export default Contributors;
