// env사용하기 -> env는 cypress.json파일에 있음.

// const navbarText = Cypress.env('navbarText')

// cy.findText(navbarText).should('exist')

context('MyFirstTest', () => {
  beforeEach(() => {
    cy.visit('http://example.cypress.io/commands/actions')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions')
  })

  // 모든 container를 확인
  it('renders the paragraph under the h1', () => {
    cy.get('.container').find('p').should('exist')
  })

  // 첫번째 container만 확인
  it('renders the paragraph under the h1', () => {
    cy.get('.container').first().find('p').should('not.exist')
  })

  // n번째 container만 확인 eq뒤에 오는 값은 idx임 (0가능)
  // 타켓도 1번째 container로 narrowed
  // limits your action to that element
  it('renders the paragraph under the h1', () => {
    cy.get('.container').eq(2).find('p').should('exist')
  })

  // within은 find와 비슷.
  // within을 하면 chaning the scope. In this case, I'm no longer targeting second container only. all
  // changes the scope for DOM element of the passedFUnction to just child element.
  // (아마) 해당 스코프내에서 더 많은 일을 할 수 있게 됨.
  // 타겟은 2번째 container
  it('renders a section with the correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist')
    })
  })

  //ch3. plugins
  it('correctly renders the cypress website link', () => {
    cy.findByText('cypress.io').should('exist')
  })
})
