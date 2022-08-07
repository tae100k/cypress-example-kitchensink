context('AsyncPromise', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // ch4
  it('types into an email field', () => {
    cy.visit('http://example.cypress.io/commands/actions') // 1
    cy.findByPlaceholderText('Emal').type('test@email.com') // 2 여기서 뭔가 잘못되면 밑에로 내려가지 않음.
    cy.wait(5000) // 4
    // console도 가능 (일반 console처럼 나옴)
  })
})
