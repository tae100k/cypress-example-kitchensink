context('Cypress Hooks', () => {
  // 첫번째 test에서만 실행되고, 두번째 테스트 실행 전에는 나타나지 않음.
  before(() => {
    // request: network request
    // .then((res)=> res)와 its()는 같은 것으로 보임
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })

  // 중복 부분 제거
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  // 모든 테스트(1,2번째 테스트) 후에 log가 남는다.
  afterEach(() => {
    cy.log('after each hook is heres')
  })

  // 2번 테스트(마지막 테스트) 후에만 log가 남는다.
  after(() => {
    cy.log('the final after hook runs once')
  })

  // ch8
  it('visits the home page', () => {
    // cy.visit('http://example.cypress.io/commands/actions')
  })

  it('has an h1 on the page', () => {
    // cy.visit('http://example.cypress.io/commands/actions')
    cy.get('h1').should('exist')
  })
})
