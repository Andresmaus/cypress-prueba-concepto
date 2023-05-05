import {Given, Then, When}from "@badeball/cypress-cucumber-preprocessor";
const Credenciales = require("../task/IngresarCredenciales");
const MensajeHome = require("../questions/ValidarIngreso");
const data = require("../../fixtures/example.json");

Given("el usuario abre la pagina Saucedemo",()=>{
    cy.visit("/");
    cy.viewport(1280,800);
});

When("ingresa sus credenciales",function(){
    Credenciales.datosCredenciales();
});

Then("verifica el ingreso", function(){
    MensajeHome.validarMensaje(data.msn);
});