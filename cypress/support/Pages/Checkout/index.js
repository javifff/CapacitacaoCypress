const el = require('./elementos').ELEMENTS

class Checkout {

    clickarCheckout() {
        cy.get(el.botonCheckout).click()
    }

    validarCheckout() {
        cy.get(el.botonContinuar).should('be.visible')
        cy.get(el.firstName).should('be.visible')
        cy.get(el.lastName).should('be.visible')
        cy.get(el.postalCode).should('be.visible')
    }

    completarFirstName(firstName) {
        cy.get(el.firstName).type(firstName)
    }

    completarLastName(lastName) {
        cy.get(el.lastName).type(lastName)
    }

    completarPostalCode(postalCode) {
        cy.get(el.postalCode).type(postalCode)
    }

    clickarBotonContinuar() {
        cy.get(el.botonContinuar).should('not.be.disabled')
        cy.get(el.botonContinuar).should('be.visible')
        cy.get(el.botonContinuar).click()
    }

    clickarBotonFinish() {
        cy.get(el.botonFinish).should('be.visible')
        cy.get(el.botonFinish).should('not.be.disabled')
        cy.get(el.botonFinish).click()
    }

    validarCompraExitosa() {
        cy.get(el.mensajeCompraExitosa).should('have.text', 'THANK YOU FOR YOUR ORDER')
    }
    
}

export default new Checkout() 