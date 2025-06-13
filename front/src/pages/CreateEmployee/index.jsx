import { Link } from 'react-router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../actions/employeeActions'

import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import Modal from '../../components/Modal'

import '../../styles/CreateEmployee.css'

function CreateEmployee() {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleAddEmployee = (employee) => {
    dispatch(addEmployee(employee))
    setModalOpen(true)
  }

  return (
    <main className="container">
      <h1 className="title">HRnet</h1>
      <Link className="link" to="/employee-list">
        View Current Employees
      </Link>
      <h2 className="subtitle">Create Employee</h2>
      <CreateEmployeeForm
        setModalOpen={setModalOpen}
        addEmployee={handleAddEmployee}
      />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}

export default CreateEmployee
