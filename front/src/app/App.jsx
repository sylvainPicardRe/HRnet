import { BrowserRouter as Router, Routes, Route } from 'react-router'

import CreateEmployee from '../pages/CreateEmployee'
import EmployeeList from '../pages/EmployeeList'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
