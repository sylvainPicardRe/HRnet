// components/RowsPerPageSelector.jsx
import PropTypes from 'prop-types'
/**
 * RowsPerPageSelector component renders a dropdown to allow the user
 * to select how many rows are displayed per page in the table.
 *
 * @param {number} value - The current number of rows per page selected
 * @param {function} onChange - Callback function triggered when user selects a new number
 */
function RowsPerPageSelector({ value, onChange }) {
  return (
    <div className="dataTables_length">
      <label>
        Show
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        entries
      </label>
    </div>
  )
}

RowsPerPageSelector.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default RowsPerPageSelector
