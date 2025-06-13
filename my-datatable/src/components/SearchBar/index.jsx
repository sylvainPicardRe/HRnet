// components/SearchBar.jsx
import PropTypes from 'prop-types'
/**
 * SearchBar component renders a search input box that allows the user
 * to filter the table data by typing a search term.
 *
 * @param {string} value - The current search input value
 * @param {function} onChange - Callback function triggered when the input value changes
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="dataTables_filter">
      <label>
        Search:
        <input
          type="search"
          aria-controls="employee-table"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchBar
