//import { beforeEach } from "mocha"
import Login from "../support/Pages/Login"
import Productos from "../support/Pages/Productos"


describe ('Realizar Login', () => {

    let da

    before(() => {
        cy.fixture('credenciales').then(function(datosAcceso) {
            da = datosAcceso
        })
    })

    beforeEach(() => {
        Login.accederUrl('/')
    })

    it('Realizar login exitoso', () => {
        Login.completarUserName(da.users.user_standard)
        Login.completarPassword(da.passwords.password_valido)
        Login.clickarEnLogin()
        Productos.validarLabelProductos()
    })

    it('Realizar login exitoso con commands', () => {
        cy.comandoLogin(da.users.user_standard, da.passwords.password_valido)
        Productos.validarLabelProductos()
    })


    it('Realizar login sin usuario', () => {
        Login.completarPassword('secret_sauce')
        Login.clickarEnLogin()
        Login.validarMensajeError('Epic sadface: Username is required')
    
    })

    it('Realizar login sin password', () => {
        Login.completarUserName('standard_user')
        Login.clickarEnLogin()
        Login.validarMensajeError('Epic sadface: Password is required')
    
    })




})