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

const TableOfContents = ({ className, items }) => {
  const { handleAnchorClick, debouncedActiveAnchor, handleTocClick, isTocVisible, isTabletWidth } =
    useTOC(items);

  return (
    <LazyMotion features={domAnimation}>
      <nav className={className}>
        <button className="inline-flex items-center" type="button" onClick={handleTocClick}>
          <h2 className="po text-[15px] font-semibold leading-snug">Table of contents</h2>
          <ChevronIcon className="ml-1.5 mt-1 hidden h-auto w-2.5 md:inline-block" />
        </button>
        <m.ul
          className="mt-4 flex flex-col border-l border-dashed border-gray-80 text-sm leading-snug text-gray-20 md:text-black"
          initial="visible"
          animate={isTocVisible ? 'visible' : 'hidden'}
          variants={isTabletWidth && animationVariants}
        >
          {items.map(({ url, title, items }) => (
            <li className="py-1 first:pt-0 last:pb-0" key={url}>
              <Link
                className={clsx(
                  'relative inline-flex pl-5 before:absolute before:inset-y-0 before:-left-px before:h-full before:w-0.5 hover:text-black',
                  {
                    'font-medium before:bg-black md:font-thin md:before:bg-transparent':
                      debouncedActiveAnchor === url,
                  }
                )}
                to={url}
                onClick={(e) => handleAnchorClick(e, url)}
              >
                {title}
              </Link>
              {items && (
                <ul className="mt-1 flex flex-col">
                  {items.map(({ url: nestedUrl, title: nestedTitle }) => (
                    <li key={nestedUrl} className="py-1 last:pb-0">
                      <Link
                        className={clsx(
                          'relative inline-flex pl-8 before:absolute before:inset-y-0 before:-left-px before:h-full before:w-0.5 hover:text-black',
                          {
                            'font-medium before:bg-black md:font-thin md:before:bg-transparent':
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
        </m.ul>
      </nav>
    </LazyMotion>
  );
};

TableOfContents.propTypes = {
  className: PropTypes.string,
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

TableOfContents.defaultProps = {
  className: null,
};

export default TableOfContents;
