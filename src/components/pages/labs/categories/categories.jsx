import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

const Categories = ({ categories, currentCategory, className }) => {
  const categoryRefs = useRef([]);

  const handleCategoryClick = (slug) => (event) => {
    event.preventDefault();
    navigate(slug);
  };

  useEffect(() => {
    const activeIndex = categories.findIndex(({ name }) => name === currentCategory);
    if (activeIndex !== -1 && categoryRefs.current[activeIndex]) {
      categoryRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [categories, currentCategory]);

  return (
    <section className={clsx('safe-paddings', className)}>
      <nav className="container-sm no-scrollbar flex overflow-visible xl:overflow-x-auto sm:px-0">
        {categories.map(({ name, slug }, index) => {
          const isActiveElement = currentCategory === name;
          return (
            <div
              className="flex first:sm:ml-6"
              // eslint-disable-next-line no-return-assign
              ref={(el) => (categoryRefs.current[index] = el)}
              key={index}
            >
              <button
                className={clsx(
                  'category-hover whitespace-nowrap py-4 text-base font-medium leading-normal',
                  isActiveElement
                    ? 'font-semibold text-black shadow-category'
                    : 'border-b border-gray-96 text-gray-50'
                )}
                type="button"
                onClick={handleCategoryClick(slug)}
              >
                {name}
              </button>
              <div className="h-full w-9 border-b border-gray-96 lg:w-6" />
            </div>
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
