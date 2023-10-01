const form = 'div[id="form-content"] form';
const fname = '#fname';
const lname = '#lname';
const submitButton = '#formSubmitButton';

class FormPage {
    submitFormWithValidData() {
        cy.get(fname).clear().type('Maciek')
        cy.get(lname).clear().type('G.').then(() => {
            expect(Cypress.$(form)[0].checkValidity()).to.be.true
            cy.once('window:alert', (text) => expect(text).to.equal('success'))
        })
        cy.get(form).submit()
    }

    submitFormWithValidDataByPressingEnter() {
        cy.get(fname).clear().type('Maciek')
        cy.get(lname).clear().type('G.').then(() => cy.once('window:alert', (text) => expect(text).to.equal('success')))
        cy.get(lname).type('{enter}')
    }

    tryToSubmitFormWithInvalidData() {
        const stub = cy.stub();
        cy.get(fname).clear()
        cy.get(lname).clear().type('G.').then(() => {
            cy.once('window:alert', stub)
        })
        cy.get(form).should($form => expect($form[0].checkValidity()).to.be.false)
        cy.get(fname).should($fname => expect($fname[0].validationMessage).to.be.equal('Please fill out this field.'))
        cy.get(submitButton).click().should(() => expect(stub).to.be.not.called)
    }
}
export default FormPage;