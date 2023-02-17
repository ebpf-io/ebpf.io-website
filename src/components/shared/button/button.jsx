import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ChevronYellow from 'icons/chevron-yellow.inline.svg';

const styles = {
  base: 'leading-none inline-flex items-center justify-center font-bold text-center whitespace-nowrap rounded-[34px] transition-colors duration-200 outline-none',
  size: {
    md: 'text-base py-4 px-7 lg:px-6',
  },
  theme: {
    'black-filled': 'bg-black text-white hover:btn-black-hover transition-[background]',
    'primary-yellow-filled': 'bg-primary-yellow text-black hover:bg-[#FFF04C]',
    withYellowChevron:
      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black hover:bg-gray-40',
  },
};

const loaderStyles = 'bg-[url("/images/loader.svg")] bg-center bg-no-repeat text-transparent';

const Button = ({
  className: additionalClassName,
  to,
  size,
  theme,
  loading,
  children,
  ...otherProps
}) => {
  const className = clsx(
    styles.base,
    styles.size[size],
    styles.theme[theme],
    loading && loaderStyles,
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {theme === 'withYellowChevron' ? <ChevronYellow className="w-1.5" /> : children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
  loading: false,
};

export default Button;
