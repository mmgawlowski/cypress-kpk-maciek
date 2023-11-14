const inputUsername = '#ba_username';
const inputPassword = '#ba_password';
const loginButton = 'div[id="basicauth-content"] button';
const invalidCredentialsMessage = '#loginFormMessage';
const urlAfterLogin = 'basicauth.html';
const loggedInMessage = '#loggedInMessage';
const returnButton = 'button[id="retrun button"]';

class BasicAuthPage {
    loginWithValidCredentials() {
        cy.get(inputUsername).clear().type('admin');
        cy.get(inputPassword).clear().type('admin');
        cy.get(loginButton).click();
        cy.url().should('eq', Cypress.config('baseUrl') + urlAfterLogin);
        cy.get(loggedInMessage).should('be.visible').and('have.text', 'You are logged in!');
        cy.get(returnButton).click();
    }

    loginWithInvalidCredentials() {
        cy.get(inputUsername).clear().type('blabla');
        cy.get(inputPassword).clear().type('blabla');
        cy.get(loginButton).click();
        cy.get(invalidCredentialsMessage).should('have.text', 'Invalid credentials');
    }
}
export default BasicAuthPage;