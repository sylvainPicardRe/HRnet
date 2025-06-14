import { Link } from 'react-router'
import { useSelector } from 'react-redux'

import DataTable from '../../components/DataTable'

function EmployeeList() {
  const data = useSelector((state) => state.employees)

  return (
    <main className="container datatable">
      <Link to="/">Home</Link>
      <DataTable data={data} />
    </main>
  )
}

export default EmployeeList
