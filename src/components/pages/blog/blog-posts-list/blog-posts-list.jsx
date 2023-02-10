import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/pages/blog/blog-post-card';
import { blogPostCardPropTypes } from 'components/pages/blog/blog-post-card/blog-post-card';

import SubscriptionForm from '../../../shared/subscription-form';
import Pagination from '../pagination';

const BlogPostsList = ({ className, items, pageCount, currentPageIndex, categorySlug }) => (
  <div className={clsx('flex flex-col', className)}>
    <div className="divide-y divide-dashed divide-gray-80">
      {items.slice(0, 5).map((item, index) => (
        <BlogPostCard {...item} key={index} />
      ))}
    </div>
    <SubscriptionForm className="my-16" />
    <div className="divide-y divide-dashed divide-gray-80">
      {items.slice(5).map((item, index) => (
        <BlogPostCard {...item} key={index} />
      ))}
    </div>

    {pageCount > 1 && (
      <Pagination
        pageCount={pageCount}
        currentPageIndex={currentPageIndex}
        categorySlug={categorySlug}
      />
    )}
  </div>
);

BlogPostsList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...blogPostCardPropTypes,
    })
  ).isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  categorySlug: PropTypes.string,
};

BlogPostsList.defaultProps = {
  className: null,
  categorySlug: null,
};

export default BlogPostsList;
