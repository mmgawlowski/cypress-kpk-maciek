const input = '#target';
const result = '#keyPressResult';

class KeyPressesPage {
    clickKeyboardKeyAndCheckResult(key: string, output: string) {
        cy.get(input).type(key);
        cy.get(result).should('have.text', 'You entered: '+ output);
    }
}
export default KeyPressesPage;