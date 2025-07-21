describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('Teste')
    cy.get('input[placeholder="Enter EMail"]').type('test@gmail.com')
    cy.get('input[id="phone"]').type('1234567890')
  })
})