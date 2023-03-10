import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ type }) => (
  <span
    className={clsx(
      'rounded pl-1.5 pr-[5px] pt-[3.5px] pb-[4.5px] text-xs font-bold uppercase leading-none tracking-middle-wide',
      { 'bg-secondary-green-light text-secondary-green': type === 'Meetup' },
      { 'bg-secondary-red-light text-secondary-red': type === 'Webinar' },
      { 'bg-secondary-green-light text-secondary-green': type === 'Conference' }
    )}
  >
    {type}
  </span>
);

Label.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Label;
