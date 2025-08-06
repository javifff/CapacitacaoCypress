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
      
      cy.get(el.iconoCarrito).should('be.visible')
      cy.get(el.iconoCarrito).click()
      // validar con commmando
      cy.validarCSS(el.textoYourCart, 'color', 'rgb(255, 255, 255)')
      cy.get(el.textoYourCart).should('have.css', 'font-size', '28px'). and('have.css', 'color', 'rgb(255, 255, 255)')
     }  
     
     
}

export default new Productos() 