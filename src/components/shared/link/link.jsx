import clsx from 'clsx';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const underlineCommonStyles =
  'relative before:absolute before:-bottom-2 before:left-0 before:h-[3px] before:w-full before:pointer-events-none';

const styles = {
  base: 'inline-flex leading-none items-center',
  transition: 'transition-colors duration-200',
  size: {
    base: 'text-base font-semibold',
    lg: 'text-lg font-semibold lg:text-base',
    md: 'text-md font-semibold lg:text-base',
    sm: 'text-sm font-semibold',
  },
  theme: {
    'black-primary-yellow': `text-black ${underlineCommonStyles} before:bg-primary-yellow hover:text-gray-40`,
    black: 'text-black hover:text-gray-40',
    white: 'text-white hover:text-gray-80',
    'primary-yellow': 'text-primary-yellow hover:text-white',
    blue: 'text-[#305fe8] hover:text-black',
    underline:
      'font-bold text-black hover:text-primary-orange underline underline-offset-4 decoration-primary-orange decoration-2',
  },
};

const Link = ({ className: additionalClassName, size, theme, to, children, ...props }) => {
  const className = clsx(
    size && theme && styles.base,
    styles.transition,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink className={className} to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
