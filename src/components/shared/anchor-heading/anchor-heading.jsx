import clsx from 'clsx';
import React from 'react';

import HashIcon from './images/hash.inline.svg';

const AnchorHeading =
  (Tag) =>
  // eslint-disable-next-line react/prop-types
  ({ children, id }) =>
    (
      <Tag id={id} className="group relative flex w-fit">
        <a
          className="anchor !absolute top-1/2 -right-16 flex h-full -translate-y-[calc(50%-0.15rem)] -translate-x-full items-center justify-center px-2.5 opacity-0 transition-opacity duration-200 before:!hidden hover:opacity-100 group-hover:opacity-100 sm:hidden"
          href={`#${id}`}
          tabIndex="-1"
          aria-hidden
        >
          <HashIcon
            className={clsx(Tag === 'h2' && 'w-4', Tag === 'h3' && 'w-3.5', 'text-gray-60')}
          />
        </a>
        {children}
      </Tag>
    );

export default AnchorHeading;
