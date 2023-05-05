const elementos = require("../userinterfaces/login");
const data = require("../../fixtures/example.json");

class IngresarCredenciales{
    datos = {
        usuario: ()=> cy.get(elementos.TXT_USUARIO),
        contrasenna:()=> cy.get(elementos.TXT_CONTRASENNA),
        signIn: ()=> cy.get(elementos.BTN_SIGN_IN)
    }

    datosCredenciales(){
        this.datos.usuario().type(data.usuario);
        this.datos.contrasenna().type(data.contrasenna);
        this.datos.signIn().click();
    }
}

module.exports = new IngresarCredenciales();