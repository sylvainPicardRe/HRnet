import { BrowserRouter as Router, Routes, Route } from 'react-router'

import CreateEmployee from '../src/pages/CreateEmployee'
import EmployeeList from '../src/pages/EmployeeList'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />}></Route>
        <Route path="/employee-list" element={<EmployeeList />}></Route>
      </Routes>
    </Router>
  )
}

export default App
