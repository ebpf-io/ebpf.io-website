import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import ChevronWhite from 'icons/chevron-white.inline.svg';
import ChevronYellow from 'icons/chevron-yellow.inline.svg';

const styles = {
  base: 'leading-none inline-flex items-center justify-center font-bold text-center whitespace-nowrap rounded-[34px] transition-colors duration-200 outline-none',
  size: {
    '2xs': 'pt-1.5 pb-2 px-2 text-12 leading-none',
    xs: 'px-4 py-3 text-base',
    sm: 'px-6 pb-4 pt-3.5 lg:px-4 lg:py-3',
    md: 'text-base py-4 px-7 lg:px-6',
    none: '',
  },
  theme: {
    gray: 'text-black bg-gray-96 border-[1.5px] border-gray-90 hover:bg-gray-98',
    disabled: 'text-gray-60 bg-gray-90 cursor-default',
    orange: 'text-white bg-button-gradient hover:opacity-90',
    'black-filled': 'bg-black text-white hover:btn-black-hover transition-[background]',
    'primary-yellow-filled': 'bg-primary-yellow text-black hover:bg-[#FFF04C]',
    withYellowChevron:
      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black hover:btn-black-hover group-hover:btn-black-hover transition-[background]',
    withWhiteChevron:
      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black hover:btn-black-hover group-hover:btn-black-hover transition-[background]',
    outline: 'border border-black hover:bg-black hover:text-primary-yellow',
    underline:
      'relative inline-block transition-all duration-200 after:absolute after:left-0 after:block after:h-[1px] after:w-full after:content-[""] hover:after:-bottom-1 hover:after:bg-black',
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
      {theme === 'withYellowChevron' && <ChevronYellow className="ml-px mt-0.5 w-2" />}
      {theme === 'withWhiteChevron' && <ChevronWhite className="ml-px w-2" />}
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
  children: null,
  loading: false,
};

export default Button;
