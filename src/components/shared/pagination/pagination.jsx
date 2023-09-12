import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import ChevronIcon from './images/chevron.inline.svg';

const pageLinkAndBreakLinkClassName =
  'flex justify-center items-center focus:border-transparent font-medium w-7 h-7 rounded-full text-black transition-colors hover:bg-gray-90 duration-200 mx-2.5';
const previousAndNextLinkClassName =
  'flex items-center space-x-2 transition-colors duration-200 font-semibold leading-none hover:text-gray-40';

const Pagination = ({ pageCount, currentPageIndex, handlePageChange, className }) => (
  <ReactPaginate
    containerClassName={clsx('flex justify-center items-center text-sm', className)}
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

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  className: null,
  currentPageIndex: 0,
};

export default Pagination;
