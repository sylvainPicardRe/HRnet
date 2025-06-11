import { Link } from 'react-router'

import DataTable from '../../components/DataTable'

function EmployeeList({ data }) {
  return (
    <main className="container">
      <Link to="/">Home</Link>
      <DataTable data={data} />
    </main>
  )
}

export default EmployeeList
