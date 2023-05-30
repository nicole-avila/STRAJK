describe('Adding Shoes', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
    cy.viewport(1000, 1000)
  })

  it('Should be possible to add shoes, with a clickable button.', () => {
    cy.get('.shoes__button').should('exist')
  })

  it('Should be able to fill in the shoe size in a input field.', () => {
    cy.get('.shoes__button').click()
    cy.get('.shoes__input').type('38').should('have.value', '38')
  })

  it('Should be possible to add x number of shoes with shoe size.', () => {
    cy.get('.shoes__button').click().click()
    cy.get('.shoes__input').first().type('38').should('have.value', '38')
    cy.get('.shoes__input').last().type('39').should('have.value', '39')
    cy.get('.shoes__input').should('have.length', '2')
  })
})


describe('Removing Shoes', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
    cy.viewport(1000, 1000)
  })

  it('At each field there should be a clickable button to remove the field.', () => {
    cy.get('.shoes__button').click().click().click()
    cy.get('.shoes__button--small').should('exist')
    cy.get('.shoes__button--small').should('have.length', '3')
  })

  it('Should be possible to remove x number of fields with shoes that custumer have added.', () => {
    cy.get('.shoes__button').click().click()
    cy.get('.shoes__input').first().type('38').should('have.value', '38')
    cy.get('.shoes__input').last().type('39').should('have.value', '39')

    cy.get('.shoes__button--small').last().click()
    cy.get('.shoes__input').should('have.length', '1')
  })
})


describe('Error Handling', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
    cy.viewport(1000, 1000)
    cy.get('.booking-info__date').type('2023-06-01')
    cy.get('[name=time]').type('18:00')
    cy.get('.booking-info__who').type('2')
    cy.get('.booking-info__lanes').type('1')
  })
  
  it('Should be informed to the customer when the user misses to add a pair of shoes.', () => {
    cy.get('.shoes__button').click()
    cy.get('.shoes__input').first().type('38')

    cy.get('.booking__button').click()
    cy.get('.error-message__text').should('be.visible')
  })

  it('Should be informed to the customer when the user adds one too many of a pair of shoes.', () => {
    cy.get('.shoes__button').click().click().click()
    cy.get('.shoes__input').first().type('38')
    cy.get('.shoes__input').first().type('39')
    cy.get('.shoes__input').first().type('40')

    cy.get('.booking__button').click()
    cy.get('.error-message__text').should('be.visible')
  })

  it('If the customer misses adding the number of shoes according to the number of players, an error message should appear.', () => {
    cy.get('.booking__button').click()
    cy.get('.error-message__text').should('be.visible')
  })
})
