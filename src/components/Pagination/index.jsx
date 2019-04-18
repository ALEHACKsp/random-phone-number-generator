import React from 'react';

import ReactPagination from 'react-paginate';

const Pagination = ({
  pageCount,
  currentPage,
  limit,
  onPageChange
}) => (
  <ReactPagination 
    previousLabel="previous"
    nextLabel="next"
    breakLabel={ <a href="">...</a> }
    breakClassName="break-me"
    pageCount={ pageCount }
    marginPagesDisplayed={ currentPage }
    pageRangeDisplayed={ limit }
    onPageChange={ onPageChange }
    containerClassName="pagination"
    subContainerClassName="pages pagination"
    activeClassName="active"
    />
)

export default Pagination;