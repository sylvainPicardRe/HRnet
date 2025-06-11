import { useState, useMemo } from 'react'
import TableHeader from '../TableHeader'
import SearchBar from '../SearchBar'
import RowsPerPageSelector from '../Rows'
import Pagination from '../Pagination'
import '../../styles/DataTable.css'

function DataTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR')
  }

  const columns = [
    { header: 'First Name', accessor: 'firstName' },
    { header: 'Last Name', accessor: 'lastName' },
    { header: 'Star Date', accessor: 'startDate', render: formatDate },
    { header: 'Department', accessor: 'department' },
    { header: 'Date of Birth', accessor: 'dateOfBirth', render: formatDate },
    { header: 'Street', accessor: 'street' },
    { header: 'City', accessor: 'city' },
    { header: 'State', accessor: 'state' },
    { header: 'Zip Code', accessor: 'zipCode' },
  ]

  const processedData = useMemo(() => {
    let tempData = [...data]
    if (searchTerm) {
      const lower = searchTerm.toLowerCase()
      tempData = tempData.filter((item) =>
        Object.values(item).some((val) =>
          val?.toString().toLowerCase().includes(lower),
        ),
      )
    }
    if (sortColumn) {
      tempData.sort((a, b) => {
        const valA = a[sortColumn]
        const valB = b[sortColumn]
        if (valA == null) return 1
        if (valB == null) return -1

        let result = 0

        if (typeof valA === 'string') {
          result = valA.localeCompare(valB)
        } else {
          if (valA > valB) {
            result = 1
          } else if (valA < valB) {
            result = -1
          } else {
            result = 0
          }
        }

        return result
      })
      if (sortDirection === 'desc') tempData.reverse()
    }
    return tempData
  }, [data, searchTerm, sortColumn, sortDirection])

  useMemo(() => setCurrentPage(1), [searchTerm, rowsPerPage])

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage
    return processedData.slice(start, start + rowsPerPage)
  }, [processedData, currentPage, rowsPerPage])

  const totalPages = Math.ceil(processedData.length / rowsPerPage)

  const handleSort = (accessor) => {
    if (sortColumn === accessor) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortColumn(accessor)
      setSortDirection('asc')
    }
  }

  return (
    <div className="dataTables_wrapper no-footer">
      <RowsPerPageSelector value={rowsPerPage} onChange={setRowsPerPage} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <table className="display dataTable no-footer">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'odd' : 'even'}>
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className={col.accessor === sortColumn ? 'sorting_1' : ''}
                >
                  {col.render
                    ? col.render(row[col.accessor])
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="dataTables_info">{`Showing ${currentPage} to ${totalPages} of ${processedData.length} entries`}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      />
    </div>
  )
}

export default DataTable
