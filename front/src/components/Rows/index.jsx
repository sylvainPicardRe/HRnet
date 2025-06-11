// components/RowsPerPageSelector.jsx
function Rows({ value, onChange }) {
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

export default Rows
