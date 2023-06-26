import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Categories = ({ categories, currentCategory, className }) => {
  const handleCategoryClick = (slug) => (event) => {
    event.preventDefault();
    navigate(slug);
  };

  return (
    <section className={clsx('container-sm', className)}>
      <nav className="no-scrollbar mx-6 flex gap-x-9 overflow-visible border-b border-gray-96 xl:overflow-x-auto lg:gap-x-6 md:mx-0">
        {categories.map(({ name, slug }, index) => {
          const isActiveElement = currentCategory === name;
          return (
            <button
              className={clsx(
                'whitespace-nowrap py-4 text-base font-medium leading-normal hover:shadow-category',
                isActiveElement ? 'font-semibold text-black shadow-category' : ' text-gray-50'
              )}
              key={index}
              type="button"
              onClick={handleCategoryClick(slug)}
            >
              {name}
            </button>
          );
        })}
      </nav>
    </section>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  currentCategory: PropTypes.string,
};

Categories.defaultProps = {
  className: null,
  currentCategory: 'All labs',
};

export default Categories;
