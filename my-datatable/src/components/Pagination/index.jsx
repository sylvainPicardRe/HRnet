// components/Pagination.jsx
import PropTypes from 'prop-types'

/**
 * Pagination component provides simple "Previous" and "Next" buttons
 * along with the current page display for navigating paginated data.
 *
 * @param {number} currentPage - The current active page number
 * @param {number} totalPages - Total number of available pages
 * @param {function} onPrevious - Callback when "Previous" button is clicked
 * @param {function} onNext - Callback when "Next" button is clicked
 */
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

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default Pagination
