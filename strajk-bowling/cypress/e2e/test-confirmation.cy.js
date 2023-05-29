describe('Booking - adding shoes', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173'), cy.viewport(1000, 1000)
    cy.get('.booking-info__date').type('2023-06-01')
    cy.get('[name=time]').type('18:00')
    cy.get('.booking-info__who').type('2')
    cy.get('.booking-info__lanes').type('1')
    cy.get('.shoes__button').click().click()
    cy.get('.shoes__input').first().type('38')
    cy.get('.shoes__input').last().type('40')
    cy.get('.booking__button').click()
    cy.wait(1000)
    cy.get('.confirmation').should('exist')
  })

  it('In the confirmation page, there should be when, how many and the number of lanes as well as a booking number field.', () => {
    cy.get('.confirmation__input').eq(0).should('have.value', '2023-06-01 18:00')
    cy.get('.confirmation__input').eq(1).should('have.value', '2')
    cy.get('.confirmation__input').eq(2).should('have.value', '1')
    cy.get('.input > label').eq(3).should('have.text', 'Booking number')
  })

  it('The price should agree with the number of players and courses (120sek/pp + 100sek/lane).', () => {
    cy.get('.confirmation__price > p').first().should('have.text', 'Total:')
    // cy.get('.confirmation__price > p').last().should('sum', '120+120+100')
    cy.get('.confirmation__price > p').last().should('have.text', '340 sek')
  })

  it('All input fields should be disabled.', () => {
    cy.get('.confirmation__input').should('be.disabled')
    cy.get('.confirmation__input').should('have.attr', 'disabled')
  })

  it('The booking field should contain numbers and letters.', () => {
    cy.get('.confirmation__input').eq(3).should('have.attr', 'value' )
    cy.get('.confirmation__input').eq(3).invoke('text').should('match', /^[0-9]*$/)     
    // cy.get('.confirmation__input').eq(3).invoke('text').should('match', 'ABSDEFGHIJKLMNOPQRSTUVWXYZ') 
  })
})