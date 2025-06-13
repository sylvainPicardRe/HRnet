// components/SearchBar.jsx
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

export default SearchBar
