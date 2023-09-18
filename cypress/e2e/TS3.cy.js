const url = 'https://simpletestsite.fabrykatestow.pl'
const iframeheader = '#iframe-header'
const iframe = 'iframe'
const button = '#simpleButton1'

describe('iFrame testing', () => {
    it('should click the button in the iFrame', () => {
        cy.visit(url)
        cy.get(iframeheader).click()
        const iFrameTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iFrameTest.find(button).click()


    })
})