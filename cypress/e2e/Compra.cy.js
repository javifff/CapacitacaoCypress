//import { beforeEach } from "mocha"
import Checkout from "../support/Pages/Checkout"
import Login from "../support/Pages/Login"
import Productos from "../support/Pages/Productos"
import { faker } from "@faker-js/faker" 

describe ('Compra Productos', () => {

    // Variable para almacenar los datos de acceso (de fixtures/credenciales.json)
    // Se utiliza 'let' para que la variable sea accesible en los bloques 'it
    // Con esto se evita el uso de 'this.da' en los bloques 'it'
    // y se puede usar '() =>' en lugar de 'function()' para definir las funciones
    
    let da

    before(() => {
        cy.fixture('credenciales').then(function(datosAcceso) {
            da = datosAcceso
        })
    })

    beforeEach(() => {
        Login.accederUrl('/')
    })

    it('Realizar compra exitosa primer producto', () => {
        Login.completarUserName(da.users.user_standard)
        Login.completarPassword(da.passwords.password_valido)
        Login.clickarEnLogin()

        Productos.clickProducto(0)
        Productos.clickarIconoCarrito()

        Checkout.clickarCheckout()
        Checkout.completarFirstName(faker.person.firstName())
        Checkout.completarLastName(faker.person.lastName())
        Checkout.completarPostalCode(faker.location.zipCode())
        Checkout.clickarBotonContinuar()
        Checkout.clickarBotonFinish()
        Checkout.validarCompraExitosa()

    })


    it('Realizar compra exitosa producto aleatorio', () => {

        // Generar un número aleatorio entre 0 y 5 (suponiendo que hay 6 productos)
        let numRandom = Cypress._.random(0, 5);

        Login.completarUserName(da.users.user_standard)
        Login.completarPassword(da.passwords.password_valido)
        Login.clickarEnLogin()
        
        Productos.clickProducto(numRandom)
        Productos.clickarIconoCarrito()

        Checkout.clickarCheckout()
        Checkout.completarFirstName(faker.person.firstName())
        Checkout.completarLastName(faker.person.lastName())
        Checkout.completarPostalCode(faker.location.zipCode())
        Checkout.clickarBotonContinuar()    
        Checkout.clickarBotonFinish()
        Checkout.validarCompraExitosa()
    })


})