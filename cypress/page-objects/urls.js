class Urls {
    visitHomePage() {
        const url = '/'
        cy.visit(url)
    }

    visitTestPage() {
        const url = '/test'
        cy.visit(url)
    }
}
export default Urls;