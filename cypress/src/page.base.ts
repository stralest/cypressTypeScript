/// <reference types="cypress"/>

export class BasePage {
    
    //Navigating to the specific url
    goToUrl(url: string): void{
        cy.visit(url);
    }

    //asserting current url
    currentUrlShouldBe(url: string): void {
        cy.url().should('eq', `${url}`);
    }
}