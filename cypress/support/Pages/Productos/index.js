const el = require('./elementos').ELEMENTS

class Productos {
    
     validarLabelProductos() {
        cy.get(el.labelProductos).should('have.text','Products')
     }
}

export default new Productos() 