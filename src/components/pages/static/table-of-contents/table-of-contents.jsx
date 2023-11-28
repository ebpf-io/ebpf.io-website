import clsx from 'clsx';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link/link';
import useTOC from 'hooks/use-toc';
import ChevronIcon from 'icons/chevron.inline.svg';

const animationVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    pointerEvents: 'none',
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    pointerEvents: 'auto',
    transition: {
      duration: 0.2,
    },
  },
};

const TableOfContents = ({ className, title, items }) => {
  const { handleAnchorClick, debouncedActiveAnchor, handleTocClick, isTocVisible, isTabletWidth } =
    useTOC(items);

  return (
    <LazyMotion features={domAnimation}>
      <aside className={clsx(className)}>
        {title && (
          <button
            className="inline-flex items-center text-gray-50 md:text-black"
            type="button"
            onClick={handleTocClick}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <ChevronIcon className="ml-1.5 mt-1 h-auto w-2.5" />
          </button>
        )}
        <m.nav
          className="sticky bottom-10 top-10 max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden md:static md:max-h-max md:overflow-y-hidden md:pt-4"
          initial="visible"
          animate={isTocVisible ? 'visible' : 'hidden'}
          variants={isTabletWidth && animationVariants}
        >
          <ul className="border-l border-dashed border-gray-80 text-gray-40 md:flex md:flex-col md:text-black">
            {items.map(({ url, title, items }) => (
              <li className="flex min-h-[22px] flex-col" key={url}>
                <Link
                  className={clsx(
                    'relative inline-flex w-fit py-1.5 pl-7 font-medium before:absolute before:inset-y-0 before:-left-px before:h-full before:w-0.5 hover:text-black lg:pl-6',
                    {
                      '!font-semibold text-black before:bg-black md:!font-medium md:text-inherit md:before:bg-transparent':
                        debouncedActiveAnchor === url,
                    }
                  )}
                  to={url}
                  onClick={(e) => handleAnchorClick(e, url)}
                >
                  {title}
                </Link>
                {items && (
                  <ul className="flex flex-col text-sm">
                    {items.map(({ url: nestedUrl, title: nestedTitle }) => (
                      <li className="min-h-[21px] py-1" key={nestedUrl}>
                        <Link
                          className={clsx(
                            'relative inline-flex py-1 pl-12 before:absolute before:inset-y-0 before:-left-px before:h-full before:w-0.5 hover:text-black lg:pl-10 md:py-0',
                            {
                              'font-medium text-black before:bg-black md:font-light md:text-inherit md:before:bg-transparent':
                                debouncedActiveAnchor === nestedUrl,
                            }
                          )}
                          to={nestedUrl}
                          onClick={(e) => handleAnchorClick(e, nestedUrl)}
                        >
                          {nestedTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </m.nav>
      </aside>
    </LazyMotion>
  );
};

export const tableOfContentsPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

TableOfContents.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  ...tableOfContentsPropTypes,
};

TableOfContents.defaultProps = {
  className: null,
  title: null,
};

export default TableOfContents;
