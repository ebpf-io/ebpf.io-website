import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const CaseStudiesList = ({ className, items, linkUrl, linkText }) => (
  <>
    <ul className={clsx('grid-gap grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1', className)}>
      {items.map(({ title, logo: Logo, description, links }, index) => (
        <li
          className="flex h-full flex-col self-stretch rounded-lg border border-gray-90 bg-white p-8"
          key={index}
        >
          <div className="max-w-full">
            <span className="sr-only">{title}</span>
            <Logo className="h-10 w-auto max-w-full md:h-9" />
          </div>

          <p
            className="mb-6 mt-6 text-xl leading-normal lg:mb-5 lg:text-base [&_strong]:font-bold"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-4 border-t border-dashed border-gray-90 pt-7 sm:pt-6">
            {links.map(({ text, to }, index) => (
              <li
                className="relative text-sm font-semibold uppercase leading-none tracking-wider before:absolute before:-right-2.5 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden lg:text-[13px]"
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
