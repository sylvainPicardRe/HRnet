import { Link } from 'react-router'

import { useState } from 'react'

import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import Modal from '../../components/Modal'

import '../../styles/CreateEmployee.css'

function CreateEmployee({ setEmployees }) {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <main className="container">
      <h1 className="title">HRnet</h1>
      <Link className="link" to="/employee-list">
        View Current Employees
      </Link>
      <h2 className="subtitle">Create Employee</h2>
      <CreateEmployeeForm
        setModalOpen={setModalOpen}
        setEmployees={setEmployees}
      />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}

export default CreateEmployee
