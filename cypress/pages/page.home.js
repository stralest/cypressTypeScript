"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const page_base_1 = require("./page.base");
class HomePage extends page_base_1.BasePage {
    getSuccessfulRegistrationDiv() {
        return cy.get('.alert-success');
    }
    getLoginLink() {
        return cy.contains('Login');
    }
    getWelcomeHeader() {
        return cy.get('h2');
    }
    getLogoutLink() {
        return cy.contains('Logout');
    }
}
exports.HomePage = HomePage;
