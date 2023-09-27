const checkBox = 'input[type="checkbox"]'

class CheckboxPage {
    checkFirstCheckbox() {
        cy.get(checkBox).first().check().should('be.checked')
    }
    uncheckLastCheckbox() {
        cy.get(checkBox).last().uncheck().should('not.be.checked')
    }
}
export default CheckboxPage;