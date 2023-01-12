describe('Create employee Page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should be on employee creation page', () => {
    cy.contains("HRnet")
    cy.contains("Create Employee")
  })

  it('should create error if missing data in the form', () => {
    cy.get('.submit-button').click();
    cy.get('#first-name-helper-text').contains('First name is required')

    cy.get('.modal').should('not.be.visible')
  })
})

describe('Go to Employee List page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should go to Employee List page', () => {
    cy.get(".link").click()
    cy.contains("Current Employees")
  })

})

describe('Create employee Page - form submitted', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get("#first-name").type("Eric")
    cy.get("#first-name").should("have.value", "Eric")
    cy.get("#last-name").type("Moreau")
    cy.get("#last-name").should("have.value", "Moreau")
    cy.get('#date-of-birth').type("1992-12-01")
    cy.get('#date-of-birth').should("have.value", "1992-12-01")
    cy.get('#start-date').type("2021-05-14")
    cy.get('#start-date').should("have.value", "2021-05-14")
    cy.get('#street').type("rue de l'orange")
    cy.get("#street").should("have.value", "rue de l'orange")
    cy.get('#city').type("Tallahassee")
    cy.get("#city").should("have.value", "Tallahassee")
    cy.get('#state').click()
    cy.get('[data-value="FL"]').click()
    cy.get("#state").contains("Florida")
    cy.get('#zip-code').type("32301")
    cy.get("#zip-code").should("have.value", "32301")
    cy.get('#department').click()
    cy.get('[data-value="legal"]').click()
    cy.get("#department").contains("Legal")
    cy.get('.submit-button').click();
  })

  it('should show modal', () => {
    cy.get('.modal').should('be.visible')
  })

  it('should close modal and reset form', () => {
    cy.get('.close-button').click()
    cy.get('.modal').should('not.be.visible')
    cy.get('#first-name').should("not.have.value", "Eric")
  })

  it('should have new employee displayed on Employee List page', () => {
    cy.get('.close-button').click()
    cy.visit('/employee-list')
    cy.contains("Current Employees")
    cy.get('.MuiDataGrid-row').contains('Eric')
  })
})