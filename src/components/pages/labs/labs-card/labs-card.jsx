import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared/image-universal';
import Link from 'components/shared/link';

const LabsCard = ({ title, description, linkText, linkUrl, ogImage, category, className }) => (
  <article
    className={clsx(
      'h-full w-full rounded-lg border border-gray-90 bg-white duration-200 hover:drop-shadow-book',
      className
    )}
  >
    <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
      <ImageUniversal
        gatsbyClassName="rounded-t-lg h-[230px] lg:h-[18vw] md:h-[44vw] w-full bg-gray-98"
        gatsbyImgClassName="mix-blend-multiply"
        svgClassName="mix-blend-multiply rounded-t-lg h-[230px] lg:h-[18vw] md:h-[44vw] w-full object-contain bg-gray-98"
        imageSrc={ogImage}
        imageUrl={ogImage?.publicURLl}
        objectFit="cover"
        width={488}
        height={230}
        alt={title}
      />
      <div className="flex h-auto w-full flex-col p-9 lg:p-6">
        <div className="flex gap-x-5">
          {category.map((category, index) => (
            <span className="text-[13px] uppercase leading-none tracking-category" key={index}>
              {category}
            </span>
          ))}
        </div>
        <h4 className="mt-[14px] text-3xl font-semibold leading-tight md:text-xl">{title}</h4>
        <p className="text-grey-40 mt-2.5 text-base leading-normal">{description}</p>
        <Link
          className="mt-auto w-fit pt-5"
          to={linkUrl}
          theme="black-primary-yellow"
          size="base"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      </div>
    </Link>
  </article>
);

export const labsCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  gImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    publicURL: PropTypes.string,
  }),
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

LabsCard.propTypes = {
  ...labsCardPropTypes,
};

LabsCard.defaultProps = {
  className: null,
};

export default LabsCard;
