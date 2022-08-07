context('AsyncPromise', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // ch5
  it('types into an email field', () => {
    cy.visit('http://example.cypress.io/commands/actions') // 1
    cy.findByPlaceholderText('Email').type('test@email.com') // 2 여기서 뭔가 잘못되면 밑에로 내려가지 않음.
    cy.wait(5000).then(() => {
      // console.log('console logged after 5000') // wait 후에
      // 흔한 use-case api fetch
      fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()).then((data) => {
      })
    })

    // console.log('console logged') // 그냥 바로
  })
})
