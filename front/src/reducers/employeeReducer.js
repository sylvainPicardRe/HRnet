const initialState = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    startDate: '04/15/2018',
    department: 'Engineering',
    dateOfBirth: '06/22/1985',
    street: '123 Main St',
    city: 'Hartford',
    state: 'CT',
    zipCode: '06103',
  },
  {
    firstName: 'Robert',
    lastName: 'Smith',
    startDate: '09/01/2020',
    department: 'Marketing',
    dateOfBirth: '11/04/1990',
    street: '456 Oak Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    startDate: '02/10/2019',
    department: 'Human Resources',
    dateOfBirth: '03/14/1988',
    street: '789 Pine Rd',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    startDate: '06/25/2017',
    department: 'Sales',
    dateOfBirth: '09/30/1982',
    street: '321 Cedar St',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
  },
  {
    firstName: 'Laura',
    lastName: 'Wilson',
    startDate: '11/03/2021',
    department: 'Legal',
    dateOfBirth: '12/05/1992',
    street: '654 Maple Dr',
    city: 'Phoenix',
    state: 'AZ',
    zipCode: '85001',
  },
  {
    firstName: 'James',
    lastName: 'Anderson',
    startDate: '08/12/2016',
    department: 'Engineering',
    dateOfBirth: '07/19/1980',
    street: '987 Birch Ln',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
  },
  {
    firstName: 'Sophia',
    lastName: 'Martinez',
    startDate: '01/08/2022',
    department: 'Marketing',
    dateOfBirth: '02/11/1995',
    street: '111 Oakwood Blvd',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
  },
  {
    firstName: 'Daniel',
    lastName: 'Lee',
    startDate: '03/14/2020',
    department: 'Sales',
    dateOfBirth: '04/07/1987',
    street: '222 Spruce Ct',
    city: 'Denver',
    state: 'CO',
    zipCode: '80201',
  },
  {
    firstName: 'Grace',
    lastName: 'Clark',
    startDate: '07/30/2015',
    department: 'Legal',
    dateOfBirth: '10/18/1979',
    street: '333 Chestnut St',
    city: 'Boston',
    state: 'MA',
    zipCode: '02108',
  },
  {
    firstName: 'William',
    lastName: 'Walker',
    startDate: '05/20/2019',
    department: 'Human Resources',
    dateOfBirth: '08/23/1986',
    street: '444 Elmwood Ave',
    city: 'Philadelphia',
    state: 'PA',
    zipCode: '19101',
  },
]

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default employeeReducer
