import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared/image-universal';
import Label from 'components/shared/label';
import Link from 'components/shared/link/link';
import { BLOG_CATEGORIES_NAME } from 'constants/blog';
import slugifyCategory from 'utils/slugify-category';

const categoriesColors = {
  [BLOG_CATEGORIES_NAME.RELEASE]: 'bg-[#F2EDFD] text-[#7A42F0]',
  [BLOG_CATEGORIES_NAME.TECHNOLOGY]: 'bg-secondary-green-light text-[#1FAD1F]',
  [BLOG_CATEGORIES_NAME.HOW_TO]: 'bg-secondary-red-light text-[#E05252]',
  [BLOG_CATEGORIES_NAME.COMMUNITY]: 'bg-secondary-blue-light text-[#0091C2]',
  [BLOG_CATEGORIES_NAME.UPDATE]: 'bg-black text-primary-yellow',
};

const Card = ({ type, title, description, ogImage, date, linkUrl, className }) => {
  const imageUrl = ogImage?.publicURL;
  const slug = slugifyCategory(type);

  return (
    <div
      className={clsx(
        'flex h-full flex-col self-stretch rounded-lg border border-gray-90 bg-white duration-200 hover:drop-shadow-book',
        className
      )}
    >
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(ogImage || imageUrl) && (
          <ImageUniversal
            gatsbyClassName="rounded-t-lg h-[182px] lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none bg-gray-98"
            gatsbyImgClassName="mix-blend-multiply"
            svgClassName="mix-blend-multiply rounded-t-lg h-[182px] w-full lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none object-contain bg-gray-98"
            imageSrc={ogImage}
            imageUrl={imageUrl}
            width={733}
            height={383}
            alt={title}
            objectFit="cover"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 pt-5 xs:p-4">
        <div className="flex flex-row items-center">
          <Label type={type} className={clsx('mr-3', categoriesColors[slug])} />
          <span className="text-sm font-light leading-none text-gray-40">{date}</span>
        </div>
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-2.5 line-clamp-2 font-sans text-2xl font-semibold leading-tight sm:text-xl">
            {title}
          </h3>
        </Link>
        <div
          className="with-link-blue mt-2 line-clamp-2 text-base font-light leading-snug text-gray-40 "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    publicURL: PropTypes.string,
  }),
  date: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  description: null,
  ogImage: null,
  className: null,
};

export default Card;
