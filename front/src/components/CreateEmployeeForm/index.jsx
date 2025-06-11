import { useState } from 'react'
import USStateSelect from 'react-select-us-states'

import '../../styles/CreateEmployeeForm.css'

function CreateEmployeeForm({ setModalOpen }) {
  const [state, setState] = useState('')

  const saveEmployee = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }

  return (
    <form action="/" id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input id="date-of-birth" type="date" />

      <label htmlFor="start-date">Start Date</label>
      <input id="start-date" type="date" />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" />

        <label htmlFor="city">City</label>
        <input id="city" type="text" />

        <label htmlFor="state">State</label>
        <USStateSelect
          id="state"
          className="state-select"
          onChange={(value) => setState(value)}
          value={state}
        />

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>

      <button className="submit-btn" onClick={saveEmployee}>
        Save
      </button>
    </form>
  )
}

export default CreateEmployeeForm
