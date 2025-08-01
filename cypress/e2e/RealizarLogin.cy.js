//import { beforeEach } from "mocha"
import Login from "../support/Pages/Login"
import Productos from "../support/Pages/Productos"

describe ('Realizar Login', () => {

    before(function() {
        cy.fixture('credenciales').then(function(da) {
            this.da = da
        })
    })

    beforeEach(() => {
        Login.accederUrl('/')
    })

    it('Realizar login exitoso', function() {
        //Login.accederUrl()
        Login.completarUserName(this.da.users.user_standard)
        Login.completarPassword(this.da.passwords.password_valido)
        Login.clickarEnLogin()
        Productos.validarLabelProductos()
    })


    it('Realizar login sin usuario', () => {
        //Login.accederUrl()        
        Login.completarPassword('secret_sauce')
        Login.clickarEnLogin()
        Login.validarMensajeError('Epic sadface: Username is required')
    
    })

    it('Realizar login sin password', () => {
        //Login.accederUrl()
        Login.completarUserName('standard_user')
        Login.clickarEnLogin()
        Login.validarMensajeError('Epic sadface: Password is required')
    
    })




})