describe('Booking form', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
    cy.viewport(1000, 1000)
  })

  it('Should be a date and time field in the booking page.', () => {
    cy.get('.booking-info__date').should('be.visible')
    cy.get('[name="time"]').should('be.visible')

    cy.get('.booking-info__date').type('2023-06-01').should('have.value', '2023-06-01')
    cy.get('[name=time]').type('18:00').should('have.value', '18:00')
  })

  it('Should be a field where you can select the number of players and lanes.', () => {
    cy.get('.booking-info__who').should('be.visible')
    cy.get('.booking-info__lanes').should('be.visible')

    cy.get('.booking-info__who').type('2').should('have.value', '2')
    cy.get('.booking-info__lanes').type('1').should('have.value', '1')
  })

  it('Should be able to make a complete booking.', () => {
    cy.get('.booking-info__date').type('2023-06-01')
    cy.get('[name=time]').type('18:00')
    cy.get('.booking-info__who').type('2')
    cy.get('.booking-info__lanes').type('1')

    cy.get('.shoes__button').click().click()
    cy.get('.shoes__input').first().type('38')
    cy.get('.shoes__input').last().type('40')

    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.confirmation').should('be.visible')
  })

  // Error handling:

  it('If a field is missed, a text should appear to inform the user that a field has been missed.', () => {
    cy.get('.booking__button').click()
    cy.get('.error-message__text')
  })

  // it('Users should be prompted to fill in a field if all fields are NOT filled in.', () => {

  // })
})
