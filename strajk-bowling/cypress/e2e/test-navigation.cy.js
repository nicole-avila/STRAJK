describe('Booking - adding shoes', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
    cy.viewport(1000, 1000)
  })

  it('Should be able to navigate around the website.', () => {
    cy.get('.navigation__icon').click()
    cy.location('pathname').should('eq', '/' )
  })

  it('Should be able to navigate around the website.', () => {
    cy.get('.navigation__icon').click()
    cy.get('.navigation__link').eq(0).click()
    cy.location('pathname').should('eq', '/' )
  })

  it('Should be able to navigate around the website.', () => {
    cy.get('.navigation__icon').click()
    cy.get('.navigation__link').eq(1).click()
    cy.location('pathname').should('eq', '/confirmation' )
  })

  it(' The URL should match the page the user is on.', () => {
    cy.visit('http://localhost:5173').get('.top > h1').should('have.text', 'Booking' )
    cy.wait(2000)
    cy.visit('http://localhost:5173/confirmation').get('.top > h1').should('have.text', 'See you soon!')
  })

  it('The booking should be deleted after clicking the confirmation button and navigating to the end page', () => {
    //Booking
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

    //Confirmation 
    cy.location('pathname').should('eq', '/confirmation' )
    cy.get('.confirmation__button').click()

    //End page
    cy.location('pathname').should('eq', '/confirmation')
    cy.get('.confirmation > h2 ').should('have.text', 'Inga bokning gjord!' )
  })
})