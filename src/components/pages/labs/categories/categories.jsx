import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Categories = ({ categories, currentCategory, className }) => {
  const handleCategoryClick = (slug) => (event) => {
    event.preventDefault();
    navigate(slug, {
      state: { preventScroll: true },
    });
  };

  return (
    <section className={clsx('container', className)}>
      <nav className="no-scrollbar mx-auto flex gap-x-6 gap-x-9 overflow-visible border-b border-gray-96 xl:overflow-x-auto">
        {categories.map(({ name, slug }, index) => {
          const isActiveElement = currentCategory === name;
          return (
            <button
              className={clsx(
                'py-4 text-base font-medium leading-normal hover:shadow-category',
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
