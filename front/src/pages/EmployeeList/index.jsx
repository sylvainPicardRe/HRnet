import { Link } from 'react-router'
import { useSelector } from 'react-redux'

import DataTable from '../../components/DataTable'

function EmployeeList() {
  const employees = useSelector((state) => state.employees)

  return (
    <main className="container">
      <Link to="/">Home</Link>
      <DataTable data={employees} />
    </main>
  )
}

export default EmployeeList
