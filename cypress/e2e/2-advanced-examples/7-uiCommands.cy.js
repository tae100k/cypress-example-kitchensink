context('UI Commands', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // ch7
  it('links to the actiosn page correctly', () => {
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
    cy.url().should('eq', 'https://example.cypress.io/commands/actions') // 도 가능
  })

  // fail할 거임
  // cy.click() failed because this element is not visible:
  // navbar에 있음.
  it('links to the actiosn page correctly', () => {
    cy.findAllByText('Actions').first().click({ force: true }) // force:true => assume cypress found that action in ui. ui에 없어도 가능
    cy.url().should('include', 'commands/actions')
    cy.url().should('eq', 'https://example.cypress.io/commands/actions')
  })

  it('lets you type in a input field', () => {
    cy.findByPlaceholderText('Email').type('Text').should('have.value', 'Text')
  })

  it('lets you clear the input field', () => {
    cy.findByLabelText('Describe:').type('Test Description').should('have.value', 'Test Description')
    .clear().should('have.value', '')
  })

  it('lets you check a checkbox', () => {
    //check()
    cy.get('.action-checkboxes [type=checkbox]').eq(1).check({ force: true }).should('be.checked')
  })
})
