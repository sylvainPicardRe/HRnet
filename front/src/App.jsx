import { BrowserRouter as Router, Routes, Route } from 'react-router'

import CreateEmployee from '../src/pages/CreateEmployee'
import EmployeeList from '../src/pages/EmployeeList'

import useLocalStorage from './components/useLocalStorage'

function App() {
  const [employees, setEmployees] = useLocalStorage('employees', [])
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CreateEmployee setEmployees={setEmployees} />}
        />
        <Route
          path="/employee-list"
          element={<EmployeeList data={employees} />}
        />
      </Routes>
    </Router>
  )
}

export default App
