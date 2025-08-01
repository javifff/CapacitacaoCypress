const el = require('./elementos').ELEMENTS

class Login {

    accederUrl(url) {
        cy.visit(url)
        cy.get(el.imgSwagLabs).should('be.visible')
    }

    completarUserName(username) {
        cy.get(el.campoUserName).type(username)
    }

    completarPassword(password) {
        cy.get(el.campoPassword).type(password)
    }

    clickarEnLogin() {
        cy.get(el.botonLogin).click()
    }

    validarMensajeError(error) {

        cy.get(el.msgError).should('have.text', error)
    }

  
}

export default new Login() 