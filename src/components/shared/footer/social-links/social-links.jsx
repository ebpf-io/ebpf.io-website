import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import socialLinks from 'data/shared/social-links';

const SocialLinks = ({ className }) => (
  <ul className={clsx('flex space-x-4 xs:justify-between xs:space-x-0', className)}>
    {socialLinks.map(({ text, to, icon: Icon }) => (
      <li key={text}>
        <Link className="group" to={to} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{text}</span>
          <Icon className="h-10 w-10 text-white transition-colors duration-200 group-hover:text-primary-yellow" />
        </Link>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: null,
};

export default SocialLinks;
