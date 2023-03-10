import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import { BLOG_BASE_PATH, BLOG_CATEGORY_BASE_PATH } from 'constants/blog';

import ChevronIcon from './images/chevron.inline.svg';

const pageLinkAndBreakLinkClassName =
  'flex justify-center items-center focus:border-transparent font-medium w-7 h-7 rounded-full text-black transition-colors hover:bg-gray-90 duration-200 mx-2.5';
const previousAndNextLinkClassName =
  'flex items-center space-x-2 transition-colors duration-200 font-semibold leading-none hover:text-gray-40';

const Pagination = ({ pageCount, categorySlug, currentPageIndex }) => {
  const handlePageChange = ({ selected }) => {
    const navigateBasePath = selected === 0 ? BLOG_BASE_PATH : `${BLOG_BASE_PATH}${selected + 1}`;
    const navigateCategoryPath =
      selected === 0
        ? `${BLOG_CATEGORY_BASE_PATH}${categorySlug}`
        : `${BLOG_CATEGORY_BASE_PATH}${categorySlug}/${selected + 1}`;

    const navigatePath = categorySlug ? navigateCategoryPath : navigateBasePath;

    navigate(navigatePath);
  };
  return (
    <ReactPaginate
      containerClassName="flex justify-center items-center mt-20 text-sm"
      pageClassName="sm:hidden"
      breakClassName="sm:hidden"
      pageLinkClassName={pageLinkAndBreakLinkClassName}
      breakLinkClassName={pageLinkAndBreakLinkClassName}
      activeLinkClassName="pointer-events-none bg-primary-yellow"
      previousClassName="mr-auto"
      nextClassName="ml-auto"
      previousLinkClassName={previousAndNextLinkClassName}
      nextLinkClassName={previousAndNextLinkClassName}
      disabledClassName="opacity-0 invisible"
      previousLabel={
        <>
          <ChevronIcon className="mt-0.5 w-[5px] rotate-180" />
          <span className="">Previous</span>
        </>
      }
      nextLabel={
        <>
          <span className="text-sm font-semibold leading-none">Next</span>
          <ChevronIcon className="mt-0.5 w-[5px]" />
        </>
      }
      forcePage={currentPageIndex}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  categorySlug: PropTypes.string,
};

Pagination.defaultProps = {
  categorySlug: null,
};

export default Pagination;
