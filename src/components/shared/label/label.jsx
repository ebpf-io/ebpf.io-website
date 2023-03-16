import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ type, className }) => (
  <span
    className={clsx(
      'w-fit rounded pl-1.5 pr-[5px] pt-[3.5px] pb-[4.5px] text-xs font-bold uppercase leading-none tracking-middle-wide',
      { 'bg-secondary-green-light text-secondary-green': type === 'Meetup' },
      { 'bg-secondary-red-light text-secondary-red': type === 'Webinar' },
      { 'bg-secondary-green-light text-secondary-green': type === 'Conference' },
      className
    )}
  >
    {type}
  </span>
);

Label.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  className: null,
};

export default Label;
