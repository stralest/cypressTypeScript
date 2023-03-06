/// <reference types="cypress"/>

import { BasePage } from "./page.base";

export class RegisterPage extends BasePage {

    //Generating random string
    getRandomString(length: number) : string {
        var chars = 'abcdefghijklABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
           result += chars[(Math.floor(Math.random() * chars.length))];
        }
        return result;
     }


    //Locating firstname field in registration form
    getFirstNameField(){
        return cy.get('[name= "ime"]').type(this.getRandomString(8));
    }

    //Locating lastname field in registration form
    getLastNameField(){
        return cy.get('[name = "prezime"]').type(this.getRandomString(8));
    }

    //Locating Email field in registration form
    getEmailField(){
         return cy.get('[name = "email"]').type(this.getRandomString(8) + '@example.local');
    }

    //Locating username field in registration form
    getUsernameField(){
        return cy.get('[name = "korisnicko"]').type(this.getRandomString(8));
    }

    //Locating password field in registration form
    getPasswordField(){
        return cy.get('#password').type('User123!');
    }

    //Locating confirmPassword field in registration form
    getConfirmPasswordField(){
        return cy.get('#passwordAgain').type('User123!');
    }

    //Locating register button in registration form
    getRegisterButton(){
        return cy.get('.nemari');
    }
}