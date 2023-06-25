import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const LabsCard = ({ title, description, linkText, linkUrl, category, className }) => (
  <article className={clsx('h-full w-full rounded-lg border border-gray-90', className)}>
    <div className="flex h-full w-full flex-col p-9 lg:p-6">
      <div className="flex gap-x-5">
        {category.map((category, index) => (
          <span className="text-[13px] uppercase leading-none tracking-category" key={index}>
            {category}
          </span>
        ))}
      </div>
      <h4 className="mt-[14px] text-3xl font-semibold leading-tight md:text-xl">{title}</h4>
      <p className="text-grey-40 mt-2.5 text-base leading-normal">{description}</p>
      <Link className="mt-auto pt-5" to={linkUrl} theme="underline-yellow" size="base">
        {linkText}
      </Link>
    </div>
  </article>
);

LabsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  className: PropTypes.string,
};

LabsCard.defaultProps = {
  className: null,
};

export default LabsCard;
