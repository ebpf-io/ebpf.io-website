import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ className: additionalClassName, small, large, children, ...restProps }) => {
  const commonClassName = 'relative mx-auto';
  const defaultSizeClassName = `${commonClassName} max-w-[1216px] xl:px-10 md:px-6 sm:px-4`;
  const smSizeClassName = `${commonClassName} max-w-[1008px] xl:px-10 md:px-6 sm:px-4`;
  const lgSizeClassName = `${commonClassName} max-w-[1472px] 2xl:px-10 md:px-6 sm:px-4`;

  let className = null;

  if (small) {
    className = additionalClassName ? `${smSizeClassName} ${additionalClassName}` : smSizeClassName;
  } else if (large) {
    className = additionalClassName ? `${lgSizeClassName} ${additionalClassName}` : lgSizeClassName;
  } else {
    className = additionalClassName
      ? `${defaultSizeClassName} ${additionalClassName}`
      : defaultSizeClassName;
  }

  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  small: false,
  large: false,
};

export default Container;
