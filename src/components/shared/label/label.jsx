import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ theme, children, className }) => (
  <mark
    className={clsx(
      'w-fit rounded pb-[4.5px] pl-1.5 pr-[5px] pt-[3.5px] text-xs font-bold uppercase leading-none tracking-middle-wide',
      { 'bg-secondary-green-light text-[#008015]': theme === 'green' },
      { 'bg-secondary-red-light text-[#CC3333]': theme === 'red' },
      { 'bg-secondary-blue-light text-[#00779E]': theme === 'blue' },
      className
    )}
  >
    {children}
  </mark>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['green', 'red', 'blue']),
};

Label.defaultProps = {
  className: null,
  theme: 'blue',
};

export default Label;
