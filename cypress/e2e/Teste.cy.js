/// <reference types="cypress" />


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
    cy.get('#datepicker').first().should('have.value', '08/24/2025')
    cy.get('#singleFileInput').selectFile('cypress/fixtures/1.jpg')
    cy.get('#singleFileInput').should('have.value', 'C:\\fakepath\\1.jpg')

  })

  it('Validar Boton 2', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
    cy.contains('STOP').should('be.visible')
    cy.contains('button','STOP').click()

    
  })

  it('Para ver each y then', () => {  
    // Clase del lunes para ver .each(), .then() e .invoke()
    cy.visit('https://testautomationpractice.blogspot.com/')
    
    // a mi forma
    cy.get('input.form-check-input[type="checkbox"]').each(($item, indice, $todo) => {
        const valor = $item.attr('value')
        if (valor.startsWith('s')) {
          console.log(valor, indice, $todo);
          cy.wrap($item).check()
        }
    })
  })
  
  // it('para iframes curso udemy argentino', () => {
  //   cy.visit('https://webdriveruniversity.com/IFrame/index.html')
  //   cy.get('#button-find-out-more > b')
  // })


  

})