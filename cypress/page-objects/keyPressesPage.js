const input = '#target';
const result = '#keyPressResult';

class KeyPressesPage {
    clickKeyboardKeyAndCheckResult(key, output) {
        cy.get(input).type(key)
        cy.get(result).should('have.text', 'You entered: '+ output)
    }
}
export default KeyPressesPage;