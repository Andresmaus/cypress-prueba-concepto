const elementos = require("../userinterfaces/login");
const data = require("../../fixtures/example.json");

class ValidarIngreso {
    mensaje = {
        label : ()=> cy.get(elementos.LBL_MENSAJE)
    }

    validarMensaje(msn){
        this.mensaje.label().should('be.visible').and('have.text', msn);
    }
}

module.exports = new ValidarIngreso();