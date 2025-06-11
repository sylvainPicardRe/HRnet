// components/TableHeader.jsx
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

export default TableHeader
