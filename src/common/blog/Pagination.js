import React from "react";
import { navigate } from "gatsby";
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPageIndex, pageCount, blogPageURL }) => {

    const handlePageChange = ({ selected }) => {
        const navigatePath =
          selected === 0 ? blogPageURL : blogPageURL + '/' + (selected + 1);
        navigate(navigatePath);
      };

    return(
        <div className='pagination-wrapper'>
            <ReactPaginate
            containerClassName="pagination-container"
            activeLinkClassName="active-page-and-break-link"
            pageLinkClassName="pagination-page-and-break-link"
            breakLinkClassName="pagination-page-and-break-link"
            previousClassName="pagination-link-wrapper right"
            nextClassName="pagination-link-wrapper left"
            previousLinkClassName="pagination-link"
            nextLinkClassName="pagination-link"
            disabledClassName="pagination-disabled"
            previousLabel={
                <>
                <span className='link-triangle rotate-180 md-hidden' />
                <span className="md-hidden">Previous</span>
                </>
            }
            nextLabel={
                <>
                <span className="md-hidden">Next</span>
                <span className='link-triangle md-hidden' />
                </>
            }
            forcePage={currentPageIndex}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            />
        </div> 
    );
}


export default Pagination;