describe('template spec', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173/confirmation')
  })

  it('test', () => {
    cy.get('[name="time"]').type('18:00');
  })

})