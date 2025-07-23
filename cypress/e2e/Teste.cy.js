describe('Test Formulario', () => {
  it('Test', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('Teste')
    cy.get('input[placeholder="Enter EMail"]').type('test@gmail.com')
    cy.get('input[id="phone"]').type('1234567890')
    cy.get('input[value="female"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select(['Red'])
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').first().should('have.value', '07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress/fixtures/1.jpg')
    cy.get('#singleFileInput').should('have.value', 'C:\\fakepath\\1.jpg')
  
  })

  it.only('Validar Boton 2', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
  })

})