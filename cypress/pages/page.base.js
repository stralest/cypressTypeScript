"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
class BasePage {
    goToUrl(url) {
        cy.visit(url);
    }
    currentUrlShouldBe(url) {
        cy.url().should('eq', `${url}`);
    }
}
exports.BasePage = BasePage;
