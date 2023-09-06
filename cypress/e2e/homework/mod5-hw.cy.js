describe('Homework for module 5', () => {
    it('Visit the main page and click the button leading to the Cypress course', function() {
        cy.visit('https://fabrykatestow.pl')
        cy.get('.elementor-button-wrapper>a[href="https://fabrykatestow.pl/cypress"]').click()
        cy.get('h1').contains('Kto nauczy Cię testów automatycznych?').scrollIntoView({ offset: { top: -150, left: 0 } }).should('be.visible')
        cy.screenshot("screenshot-mod5", {capture: 'viewport', overwrite: true})
})
})