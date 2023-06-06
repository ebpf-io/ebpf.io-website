import PropTypes from 'prop-types';
import React from 'react';

const Heading = (props) => {
  const {
    className: additionalClassName,
    tag: Tag,
    size,
    innerHTML,
    children,
    ...otherProps
  } = props;

  const commonStylesClassName = 'font-bold';
  let sizeClassName = null;
  switch (size) {
    case '4xl':
      sizeClassName = 'text-9xl lg:text-7xl md:text-5xl';
      break;
    case '3xl':
      sizeClassName = 'text-7xl md:text-6xl';
      break;
    case '2xl':
      sizeClassName = 'text-6xl md:text-5xl';
      break;
    case 'xl':
      sizeClassName = 'text-5xl md:text-4xl';
      break;
    case 'lg':
      sizeClassName = 'text-4xl md:text-3xl';
      break;
    default:
      return undefined;
  }

  const className = additionalClassName
    ? `${commonStylesClassName} ${sizeClassName} ${additionalClassName}`
    : `${commonStylesClassName} ${sizeClassName}`;

  if (innerHTML) {
    return (
      <Tag className={className} dangerouslySetInnerHTML={{ __html: innerHTML }} {...otherProps} />
    );
  }

  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['3xl', '2xl', 'xl', 'lg']),
  innerHTML: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  className: null,
  size: 'xl',
  innerHTML: '',
  children: null,
};

export default Heading;
