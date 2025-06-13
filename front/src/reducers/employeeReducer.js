// reducer.js
const initialState = {
  employees: [],
}

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      }
    default:
      return state
  }
}

export default employeeReducer
