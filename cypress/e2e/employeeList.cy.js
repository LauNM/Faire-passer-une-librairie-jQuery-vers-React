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