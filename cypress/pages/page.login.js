"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const page_base_1 = require("./page.base");
class LoginPage extends page_base_1.BasePage {
    getUsernameField(username) {
        return cy.get('.form-control').first().type(username);
    }
    getPasswordField(password) {
        return cy.get('[name="password"]').type(password);
    }
    getLoginButton() {
        return cy.get('.btn-block');
    }
}
exports.LoginPage = LoginPage;
