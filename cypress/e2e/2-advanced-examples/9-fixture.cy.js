context('Fixture', () => {
  beforeEach(() => {
    // arrow syntax 사용 시, cypress test runnder doesn't have access to the object.
    // 잘못된 예
    // cy.fixture('example').then((data) => {
    //   this.data = data
    // })

    // 잘된 예
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('BEFORE EACH', this.data)
    })
  })

  // intercept 고급 기술
  // 믿을 수 없는 api로 부터 독립하여 fixture데이터를 사용하는 경우에 유용
  it('uses fixture data in a network request', () => {
    cy.visit('http://example.cypress.io/commands/network-requests')
    cy.intercept('GET', '**/comments/*').as('getComment') // '**/comments/*'를 가리키는 GET request를 this.data(example.json)으로 바꿈 // this.data가 반영 됨
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Response: ', res)
    })
  })

  // ch9
  it('pulls data from a fixture', () => {
    cy.fixture('example') //example.json이 생략된 것
    .then((data) => {
      cy.log('DATA : ', data) // example.json에 있는 파일들을 가리킴.
    })
  })

  it('updates fixture data inline', () => {
    cy.fixture('example').then((data) => {
      data.email = 'updated@gmail.com'
      cy.log('UPDATED', data)
    })
  })
})
