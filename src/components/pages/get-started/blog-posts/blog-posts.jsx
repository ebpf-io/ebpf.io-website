import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import Card from './card';

const BlogPosts = ({ title, linkTitle, linkUrl, items, className }) => (
  <section className={clsx('safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14', className)}>
    <div className="container">
      <h2 className="heading-8xl text-center font-semibold leading-tight">{title}</h2>
      <div className="grid-gap mt-14 grid auto-rows-min grid-cols-12 justify-items-stretch md:mt-11 sm:mt-8 sm:flex sm:flex-col sm:gap-y-5">
        {items.map((item, index) => (
          <Card {...item} className="col-span-4 md:col-span-6" key={index} />
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center sm:mt-10">
        <Link theme="black-primary-yellow" size="lg" to={linkUrl}>
          {linkTitle}
        </Link>
      </div>
    </div>
  </section>
);

BlogPosts.propTypes = {
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

BlogPosts.defaultProps = {
  className: null,
};

export default BlogPosts;
