/// <reference types="cypress"/>

import { BasePage } from "./page.base";

export class HomePage extends BasePage {

    //Locating Success message after submiting the registration form
    getSuccessfulRegistrationDiv(){
        return cy.get('.alert-success');
    }
 
    //Locating login link
    getLoginLink(){
        return cy.contains('Login');
    }

    //Locating Welcome back header 
    getWelcomeHeader(){
        return cy.get('h2');
    }

    //Locating logout link
    getLogoutLink(){
        return cy.contains('Logout');
    }
}