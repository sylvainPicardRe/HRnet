// components/Pagination.jsx
function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  return (
    <div className="dataTables_paginate paging_simple_numbers">
      <button
        className="paginate_button previous"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="paginate_button current">{currentPage}</span>
      <button
        className="paginate_button next"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
