import { useState } from 'react'
import USStateSelect from 'react-select-us-states'

import '../../styles/CreateEmployeeForm.css'

function CreateEmployeeForm({ setModalOpen, setEmployees }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })

  console.log(form)

  // Mise à jour des `<input>` et du `<select>`
  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  // Mise à jour de USStateSelect
  function handleStateChange(value) {
    setForm((f) => ({ ...f, state: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function saveEmployee() {
    setEmployees((prev) => [...prev, form])

    setForm({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      department: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
    })
    setModalOpen(true)
  }

  return (
    <form onSubmit={handleSubmit} id="create-employee">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={form.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={form.lastName}
        onChange={handleChange}
      />

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        value={form.dateOfBirth}
        onChange={handleChange}
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={form.startDate}
        onChange={handleChange}
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          value={form.street}
          onChange={handleChange}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={form.city}
          onChange={handleChange}
        />

        <label htmlFor="state">State</label>
        <USStateSelect
          className="state-select"
          value={form.state}
          onChange={handleStateChange}
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={form.zipCode}
          onChange={handleChange}
        />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={form.department}
        onChange={handleChange}
      >
        <option value="">-- Sélectionnez --</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <button type="submit" className="submit-btn" onClick={saveEmployee}>
        Save
      </button>
    </form>
  )
}

export default CreateEmployeeForm
