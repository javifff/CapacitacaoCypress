// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commmands.add('realizarLogin', (user, password) => {
//     cy.get('#user-name').type(user)
//     cy.get('#password').type(password)
//     cy.get('#login-button').click()
// })

Cypress.Commands.add('comandoLogin', (user, password) => {
    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('validarCSS', (selector, propiedad, valor) => {
    cy.get(selector).should('have.css', propiedad, valor)
})


