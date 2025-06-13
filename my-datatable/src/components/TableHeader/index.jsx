// components/TableHeader.jsx
import PropTypes from 'prop-types'
/**
 * TableHeader component renders the table's header row with column headers.
 * Each header is clickable to allow sorting by that column.
 *
 * @param {Array} columns - Array of column objects { header, accessor }
 * @param {string|null} sortColumn - The column currently sorted by (accessor key)
 * @param {string} sortDirection - Sorting direction ('asc' or 'desc')
 * @param {function} onSort - Callback function when a column header is clicked
 */
function TableHeader({ columns, sortColumn, sortDirection, onSort }) {
  return (
    <thead>
      <tr role="row">
        {columns.map((col) => (
          <th
            key={col.accessor}
            onClick={() => onSort(col.accessor)}
            className="sorting"
            aria-label={`${col.accessor}: activate to sort column ${
              sortDirection === 'asc' ? 'ascending' : 'descending'
            }`}
          >
            {col.header}
            <div className="sort-icon-wrapper">
              <span
                className={`arrow up ${sortColumn === col.accessor && sortDirection === 'asc' ? 'active' : ''}`}
              >
                {' '}
                ▲
              </span>
              <span
                className={`arrow down ${sortColumn === col.accessor && sortDirection === 'desc' ? 'active' : ''}`}
              >
                ▼
              </span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      render: PropTypes.func,
    }),
  ).isRequired,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc']).isRequired,
  onSort: PropTypes.func.isRequired,
}
export default TableHeader
