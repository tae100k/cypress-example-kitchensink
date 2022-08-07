context('AsyncPromise', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // ch6
  it('shows an active class for the current page', () => {
    cy.visit('http://example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('shows not have an active class for the inactive page', () => {
    cy.visit('http://example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').first()
    .should('not.have.class', 'active')
    .find('a')
    .should('have.attr', 'href', '/commands/querying') // 부정문도 가능
  })

  // should.exist()가 생략되어도 암묵적으로 이를 체크하는 코드들도 있음 (ex: findByPlaceholderText.type())
  // built in assertion
  // click, type etc...
})
