const el = require('./elementos').ELEMENTS

class Productos {
    
     validarLabelProductos() {
        cy.get(el.labelProductos).should('have.text','Products')
     }

     clickProducto(num) {
      cy.get(el.botonAñadir).then((button) => {
          cy.wrap(button.eq(num)).click()
          cy.wrap(button.eq(num)).should('have.text', 'REMOVE')})
     }

     clickarIconoCarrito() {
        cy.get(el.iconoCarrito).click()
     }  
     
     
}

export default new Productos() 