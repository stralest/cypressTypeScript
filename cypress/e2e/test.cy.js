/// <reference types ="cypress"/>

import { BasePage } from "../pages/page.base"
import { HomePage } from "../pages/page.home";
import { LoginPage } from "../pages/page.login";
import { RegisterPage } from "../pages/page.register"

describe('template spec', () => {
  let pageBase;
  let pageRegister;
  let pageHome;
  let pageLogin;

//Executing before the tests start
  before(() => {
    pageBase = new BasePage();
    pageRegister = new RegisterPage();
    pageHome = new HomePage();
    pageLogin = new LoginPage();
  })

  it('Verifies that registration page is opened, filling out the form and submiting', () => {
    pageRegister.goToUrl('http://shop.qa.rs/register');
    pageRegister.currentUrlShouldBe('http://shop.qa.rs/register');

    pageRegister.getFirstNameField().should('have.class', 'mora');
    pageRegister.getLastNameField().should('have.class', 'mora');
    pageRegister.getEmailField().should('have.attr', 'type', 'email');
    pageRegister.getUsernameField().should('have.class', 'mora');
    pageRegister.getPasswordField().should('have.attr','type', 'password');
    pageRegister.getConfirmPasswordField().should('have.attr','type', 'password');
    pageRegister.getRegisterButton().should('have.value', 'Register').click();

    pageHome.getSuccessfulRegistrationDiv().should('contain.text', 'Uspeh! Uspešno ste dodali korisnika');
  
  })

  it('Verifies that login page is opened', () => {
    pageLogin.goToUrl('http://shop.qa.rs/login');
    pageLogin.currentUrlShouldBe('http://shop.qa.rs/login');

    pageLogin.getUsernameField('aaa').should('have.value', 'aaa');
    pageLogin.getPasswordField('aaa').should('have.value', 'aaa');
    pageLogin.getLoginButton().should('contain.value', 'Uloguj').click();

    pageHome.getWelcomeHeader().should('contain.text', 'Welcome back,');
    pageHome.getLogoutLink().should('be.visible');
   
  })
})