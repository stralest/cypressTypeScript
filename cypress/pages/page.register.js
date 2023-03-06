"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPage = void 0;
const page_base_1 = require("./page.base");
class RegisterPage extends page_base_1.BasePage {
    getRandomString(length) {
        var chars = 'abcdefghijklABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += chars[(Math.floor(Math.random() * chars.length))];
        }
        return result;
    }
    getFirstNameField() {
        return cy.get('[name= "ime"]').type(this.getRandomString(8));
    }
    getLastNameField() {
        return cy.get('[name = "prezime"]').type(this.getRandomString(8));
    }
    getEmailField() {
        return cy.get('[name = "email"]').type(this.getRandomString(8) + '@example.local');
    }
    getUsernameField() {
        return cy.get('[name = "korisnicko"]').type(this.getRandomString(8));
    }
    getPasswordField() {
        return cy.get('#password').type('User123!');
    }
    getConfirmPasswordField() {
        return cy.get('#passwordAgain').type('User123!');
    }
    getRegisterButton() {
        return cy.get('.nemari');
    }
}
exports.RegisterPage = RegisterPage;
