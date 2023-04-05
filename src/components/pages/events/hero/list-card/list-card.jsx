import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import DateAndPlace from 'components/shared/date-and-place';
import Label from 'components/shared/label';
import Link from 'components/shared/link/link';

const ListCard = ({ type, title, date, place, linkUrl, className }) => (
  <div
    className={clsx(
      'flex h-auto w-full flex-col border-t border-dashed border-gray-90 py-6 first:border-none first:pt-0 lg:first:border-t',
      className
    )}
  >
    <Link className="h-full" to={linkUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex h-full flex-col">
        <Label type={type} />
        <h3 className="mt-2.5 font-sans text-2xl font-semibold leading-tight line-clamp-2 sm:text-xl">
          {title}
        </h3>
        <DateAndPlace className="mt-auto pt-4" date={date} place={place} />
      </div>
    </Link>
  </div>
);

ListCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ListCard.defaultProps = {
  className: null,
};

export default ListCard;
