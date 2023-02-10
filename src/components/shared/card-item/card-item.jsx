import PropTypes from 'prop-types';
import React from 'react';

const CardItem = ({ title, children }) => (
  <div className="rounded-xl border border-gray-90 px-7 pt-5 pb-7 sm:px-6 sm:pb-5">
    <h3 className="!my-0 font-sans text-3xl font-medium md:text-2xl sm:text-xl">{title}</h3>
    <div className="prose mt-5 border-t border-dashed border-gray-80 pt-5 prose-ol:my-0 prose-ul:my-0 prose-li:my-3 first:prose-li:mt-0 last:prose-li:mb-0 sm:mt-4 sm:pt-4">
      {children}
    </div>
  </div>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardItem;
