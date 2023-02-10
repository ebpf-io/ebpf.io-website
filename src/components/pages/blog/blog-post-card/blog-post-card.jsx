import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

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

const Image = ({ coverImage }) => {
  if (!coverImage?.childImageSharp && coverImage?.publicURL) {
    return (
      <img
        className="h-[200px] w-[200px] shrink-0 bg-gray-94 object-contain sm:h-[250px] sm:w-auto"
        src={coverImage.publicURL}
        alt=""
        loading="lazy"
        width={200}
        height={200}
      />
    );
  }

  if (coverImage?.childImageSharp) {
    return (
      <GatsbyImage
        className="h-[200px] w-full max-w-[200px] shrink-0 bg-gray-94 sm:h-[250px] sm:max-w-none"
        image={getImage(coverImage)}
        alt=""
        loading="lazy"
        objectFit="contain"
      />
    );
  }

  return (
    <img
      className="shrink-0 bg-gray-94 sm:h-[250px]"
      src={`data:image/svg+xml;charset=utf-8,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
      alt=""
      aria-hidden
    />
  );
};

Image.propTypes = {
  coverImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    publicURL: PropTypes.string,
  }),
};

Image.defaultProps = {
  coverImage: null,
};

const BlogPostCard = ({
  frontmatter: { categories, title, description, date, ogImage: coverImage, externalUrl, path },
}) => (
  <Link
    className="flex space-x-9 py-10 first:pt-0 last:pb-0 sm:flex-col sm:space-x-0 sm:space-y-6"
    to={externalUrl || path}
    target={externalUrl ? '_blank' : '_self'}
    rel={externalUrl ? 'noopener noreferrer' : null}
  >
    <Image coverImage={coverImage} />
    <div className="group flex flex-col">
      <div className="space-x-3 text-[13px] leading-none">
        <span className="inline-flex space-x-3">
          {categories.map((category, index) => {
            const slug = slugifyCategory(category);
            return (
              <span
                className={clsx(
                  categoriesColors[slug] || 'bg-[#f7f7f7] text-gray-60',
                  'inline-flex rounded-[18px] px-2 pt-1.5 pb-2 font-medium leading-none'
                )}
                key={index}
              >
                {category}
              </span>
            );
          })}
          {externalUrl && (
            <span className="inline-flex rounded-[18px] bg-[#f7f7f7] px-2 pt-1.5 pb-2 font-medium leading-none text-gray-60">
              External
            </span>
          )}
        </span>
        <time className="text-gray-40">{date}</time>
      </div>
      <h2 className="mt-3 font-sans text-3xl font-semibold leading-tight transition-colors duration-200 line-clamp-2 group-hover:text-gray-40 lg:text-2xl md:text-xl">
        {title}
      </h2>
      <p className="mt-2 mb-7 line-clamp-2">{description}</p>
      <span className="mt-auto self-start border-b-2 border-primary-yellow pb-1 font-sans text-sm font-semibold leading-none transition-colors duration-200 group-hover:text-gray-40">
        Read more
      </span>
    </div>
  </Link>
);

export const blogPostCardPropTypes = {
  frontmatter: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    ogImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }),
      publicURL: PropTypes.string,
    }),
  }).isRequired,
};

BlogPostCard.propTypes = {
  ...blogPostCardPropTypes,
};

export default BlogPostCard;
