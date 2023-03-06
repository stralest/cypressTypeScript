/// <reference types ="cypress"/>

import { BasePage } from "./page.base";

export class LoginPage extends BasePage {


    //Locating username field in login form
    getUsernameField(username: string){
        return cy.get('.form-control').first().type(username);
    }


    //Locating password field in login form
    getPasswordField(password: string){
        return cy.get('[name="password"]').type(password);
    }

    //Locating login button in login form
    getLoginButton(){
        return cy.get('.btn-block');
    }
}