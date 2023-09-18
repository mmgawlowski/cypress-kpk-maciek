const url = 'https://register.rediff.com/register/register.php'

describe('Testing alerts', () => {
    it('should check if alert appears', () => {
        cy.visit(url)
        cy.get('input[type="submit]').click()
    })
})