const data = require('../fixtures/employeeList.json')

describe('Employee List Page with no data', () => {
  beforeEach(() => {
    cy.visit('/employee-list');
  })

  it('should be on employees table page', () => {
    cy.contains("Current Employees")
  })

  it('should have no data', () => {
    cy.contains("No rows")
  })
})

describe('Employee List Page with data', () => {
  beforeEach(() => {
    cy.visit('/employee-list');
    localStorage.setItem("EmployeeList", JSON.stringify(data));
  })

  it('should have data in localStorage', () => {
    cy.getAllLocalStorage().should(() => {
      expect(localStorage.getItem('EmployeeList')).to.deep.equal(JSON.stringify(
        [
          {
            "first-name":"Anthony",
            "last-name":"Brel",
            "date-of-birth":"1989-06-11",
            "start-date":"2023-01-22",
            "street":"Rue du state",
            "city":"New york",
            "state":"NY",
            "zip-code":"111111",
            "department":"Sales",
            "id":"2f75fea1-62e8-4225-b8cd-3a1a6ff6bb0b"
          },
          {
            "first-name":"Charline",
            "last-name":"Brel",
            "date-of-birth":"1977-06-30",
            "start-date":"2020-01-13",
            "street":"Rue du Stade",
            "city":"New york",
            "state":"NY",
            "zip-code":"111111",
            "department":"Marketing",
            "id":"2f75fea1-62e8-4665-b8cd-3a1a6ff6bb0b"
          }
        ]
      ))
    })
  })

  it('should display same data as localStorage', () => {
    cy.get('.MuiDataGrid-row').should('have.length', 2)
    cy.get('.MuiDataGrid-row').first().contains('Anthony')
    cy.get('.MuiDataGrid-row').last().contains('Charline')
  })

  it('should filter data', () => {
    cy.get('.MuiFormControl-root').type('Charline')
    cy.wait(400)
    cy.get('.MuiDataGrid-row').contains('Charline')
    cy.get('.MuiDataGrid-row').contains('Anthony').should('not.exist')
  })

  it('should remove filter', () => {
    cy.get('.MuiFormControl-root').type('Charline')
    cy.wait(400)
    cy.get('.MuiDataGrid-row').contains('Anthony').should('not.exist')
    cy.get('[data-testid="CloseIcon"]').click()
    cy.get('.MuiDataGrid-row').contains('Anthony')
  })
})

describe('Go back to home page', () => {
  beforeEach(() => {
    cy.visit('/employee-list');
  })

  it('should go back to home page', () => {
    cy.get(".link").click()
    cy.contains("Create Employee")
  })

})