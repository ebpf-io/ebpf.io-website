import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import { EVENT_PER_PAGE } from 'constants/event';

import ChevronIcon from './images/chevron.inline.svg';

const pageLinkAndBreakLinkClassName =
  'flex justify-center items-center focus:border-transparent font-medium w-7 h-7 rounded-full text-black transition-colors hover:bg-gray-90 duration-200 mx-2.5';
const previousAndNextLinkClassName =
  'flex items-center space-x-2 transition-colors duration-200 font-semibold leading-none hover:text-gray-40';

const Pagination = ({ pageCount, totalCount, callback }) => {
  const handlePageChange = ({ selected }) => {
    const newOfSet = (selected * EVENT_PER_PAGE) % totalCount;
    callback(newOfSet);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ReactPaginate
      containerClassName="container flex justify-center items-center pt-16 pb-32 text-sm"
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
      // forcePage={currentPageIndex}
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Pagination;
