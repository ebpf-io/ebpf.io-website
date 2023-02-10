import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const CaseStudiesList = ({ className, items, linkUrl, linkText }) => (
  <>
    <ul className={clsx('grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1', className)}>
      {items.map(({ title, logo: Logo, description, links }, index) => (
        <li
          className={clsx(
            'flex flex-col items-start border-l border-t border-dashed border-gray-80 p-10 lg:p-8',
            '[&:nth-child(3n+1)]:border-l-0 [&:nth-child(-n+3)]:border-t-0',
            'md:[&:nth-child(3n+1)]:border-l md:[&:nth-child(-n+3)]:border-t md:[&:nth-child(2n+1)]:border-l-0 md:[&:nth-child(-n+2)]:border-t-0',
            'sm:border-l-0 sm:!border-t sm:px-0 sm:first:!border-t-0 sm:first:pt-0 sm:last:pb-0 sm:[&:nth-child(3n+1)]:border-l-0'
          )}
          key={index}
        >
          <div className="max-w-full">
            <span className="sr-only">{title}</span>
            <Logo className="h-10 w-auto max-w-full md:h-9" />
          </div>

          <p
            className="mt-6 mb-7 text-lg lg:mb-5 lg:text-base [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-4">
            {links.map(({ text, to }, index) => (
              <li
                className="relative text-sm font-semibold uppercase leading-none tracking-wider before:absolute before:top-1/2 before:-right-2.5 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden lg:text-[13px]"
                key={index}
              >
                <Link theme="black" target="_blank" rel="noreferrer noopener" to={to}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    {linkText && linkUrl && (
      <Link className="mt-10 lg:mt-8 sm:mt-10" theme="black-primary-yellow" size="lg" to={linkUrl}>
        {linkText}
      </Link>
    )}
  </>
);

CaseStudiesList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      logo: PropTypes.func,
      description: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

CaseStudiesList.defaultProps = {
  className: null,
  linkText: null,
  linkUrl: null,
};

export default CaseStudiesList;
