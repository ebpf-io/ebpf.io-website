import clsx from 'clsx';
import React from 'react';

import HashIcon from 'icons/hash.inline.svg';

const AnchorHeading =
  (Tag) =>
  // eslint-disable-next-line react/prop-types
  ({ children, id, className }) =>
    (
      <Tag id={id} className={clsx('group relative flex w-fit', className)}>
        <a
          className="anchor inline-flex text-black before:!hidden hover:!text-black"
          href={`#${id}`}
          tabIndex="-1"
          aria-hidden
        >
          <span
            className={clsx(
              'absolute top-1/2 flex h-full -translate-x-full -translate-y-[calc(50%-0.15rem)] items-center justify-center px-2.5 opacity-0 transition-opacity duration-200 hover:opacity-100 group-hover:opacity-100 sm:hidden',
              Tag === 'h2' && '-right-[72px]',
              Tag === 'h3' && '-right-16'
            )}
          >
            <HashIcon
              className={clsx(Tag === 'h2' && 'w-4', Tag === 'h3' && 'w-3.5', 'text-gray-60')}
            />
          </span>

          {children}
        </a>
      </Tag>
    );

export default AnchorHeading;
