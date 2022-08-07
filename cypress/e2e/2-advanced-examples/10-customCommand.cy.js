context('Custom Command', () => {
  // cy.visit('http://example.cypress.io/commands/actions')

  const token = 'abcd123'

  // ch10
  it('sets a token in local Storage', () => {
    cy.setLocalStorage('token', token) //command.js에 있는 setLocalStorage를 사용
  })

  // 이렇게 하면 위에거와 아래거는 (get과 set은 독립실행이기 때문에 당연히 현재 localStorage는 빈 값)
  it('gets a token in local Storage', () => {
    cy.getLocalStorage('token').should('not.eq', token) //command.js에 있는 setLocalStorage를 사용
  })

  it('sets and getsa token in local Storage', () => {
    cy.setLocalStorage('token', token) //command.js에 있는 setLocalStorage를 사용
    cy.getLocalStorage('token').should('eq', token) //command.js에 있는 setLocalStorage를 사용
  })

  it('overwrite the type command by using sentivie characters', () => {
    cy.visit('http://example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true }) // **처리된 로그가 나올 것임.
  })
})
