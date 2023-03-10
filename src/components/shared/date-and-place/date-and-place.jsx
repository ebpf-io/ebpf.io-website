import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import PlaceIcon from './images/place.inline.svg';
import TimeIcon from './images/time.inline.svg';

const DateAndPlace = ({ date, place, className }) => (
  <div className={clsx('flex gap-x-4 xs:flex-col xs:gap-x-0 xs:gap-y-4', className)}>
    {date && (
      <div className="inline-flex items-center gap-x-1.5">
        <TimeIcon className="w-3.5 shrink-0" />
        <span className="text-sm font-normal leading-none">
          <time dateTime={date}>{date}</time>
        </span>
      </div>
    )}
    {place && (
      <div className="flex items-center gap-x-1.5">
        <PlaceIcon className="w-3.5 shrink-0" />
        <span className="text-sm font-normal leading-none">{place}</span>
      </div>
    )}
  </div>
);

DateAndPlace.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  className: PropTypes.string,
};

DateAndPlace.defaultProps = {
  date: null,
  place: null,
  className: null,
};

export default DateAndPlace;
