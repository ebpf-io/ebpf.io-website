import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link/link';
import { BLOG_BASE_PATH, BLOG_CATEGORY_BASE_PATH, BLOG_CATEGORIES_NAME } from 'constants/blog';

import AllPostsIcon from './images/all-posts.inline.svg';
import CommunityIcon from './images/community.inline.svg';
import ExternalIcon from './images/external.inline.svg';
import HowToIcon from './images/how-to.inline.svg';
import ReleaseIcon from './images/release.inline.svg';
import TechnologyIcon from './images/technology.inline.svg';
import UpdateIcon from './images/update.inline.svg';

const icons = {
  [BLOG_CATEGORIES_NAME.RELEASE]: ReleaseIcon,
  [BLOG_CATEGORIES_NAME.TECHNOLOGY]: TechnologyIcon,
  [BLOG_CATEGORIES_NAME.EXTERNAL]: ExternalIcon,
  [BLOG_CATEGORIES_NAME.ALL_POSTS]: AllPostsIcon,
  [BLOG_CATEGORIES_NAME.HOW_TO]: HowToIcon,
  [BLOG_CATEGORIES_NAME.COMMUNITY]: CommunityIcon,
  [BLOG_CATEGORIES_NAME.UPDATE]: UpdateIcon,
};

const Sidebar = ({ className, categories, pathname }) => (
  <aside
    className={clsx(
      'scrollbar-hidden overflow-x-hidden md:-mx-7 md:overflow-x-auto md:px-7 sm:-mx-4 sm:px-4',
      className
    )}
  >
    <ul className="h-full border-r border-gray-90 py-20 lg:py-16 md:flex md:w-full md:border-r-0 md:border-b md:pt-12 md:pb-0 md:after:flex-[0_0_28px] sm:after:flex-[0_0_16px]">
      {categories.map(({ name, slug }) => {
        const url = slug === '' ? BLOG_BASE_PATH : `${BLOG_CATEGORY_BASE_PATH}${slug}/`;
        const Icon = icons[slug] || icons['all-posts'];

        const isActiveLink = () => {
          const isNumberAtTheEnd = pathname.match(/\/\d+\/$/);
          if (isNumberAtTheEnd) {
            const pathnameWithoutNumber = pathname.replace(/\/\d+\/$/, '/');
            return pathnameWithoutNumber === url;
          }

          return pathname === url;
        };

        return (
          <li className="py-2 font-medium text-gray-50 md:py-0" key={slug}>
            <Link
              className={clsx(
                'relative flex space-x-1.5 whitespace-pre hover:text-black md:right-0 md:px-2.5 md:pb-2',
                'after:absolute after:inset-y-0 after:-right-[3px] after:h-full after:w-1 after:rounded-md after:transition-colors after:duration-200',
                'md:after:inset-x-0 md:after:-bottom-0.5 md:after:top-auto md:after:h-0.5 md:after:w-full md:after:bg-gray-90',
                {
                  'font-semibold text-black after:!bg-black md:after:!-bottom-[3px] md:after:!h-1':
                    isActiveLink(),
                }
              )}
              to={url}
            >
              <Icon className={clsx('h-7 w-7 transition-colors duration-200')} />
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  pathname: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  className: null,
};

export default Sidebar;
