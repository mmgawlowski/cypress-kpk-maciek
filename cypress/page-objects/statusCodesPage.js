const code200 = 'a#200siteAnchor';
const code305 = 'a#305siteAnchor';
const code404 = 'a#404siteAnchor';
const code500 = 'a#500siteAnchor';

class StatusCodesPage {
    check200() {
        cy.get(code200).invoke('attr', 'href').then((link) => cy.request(link).then((response) => expect(response.status).to.be.equal(200)))
    }

    check305() {
        cy.get(code305).invoke('attr', 'href').then((link) => cy.request({url: link, followRedirect: false}).then((response) => expect(response.status).to.be.equal(305)))
    }

    check404() {
        cy.get(code404).invoke('attr', 'href').then((link) => cy.request({url: link, failOnStatusCode: false}).then((response) => expect(response.status).to.be.equal(404)))
    }

    check500() {
        cy.get(code500).invoke('attr', 'href').then((link) => cy.request({url: link, failOnStatusCode: false}).then((response) => expect(response.status).to.be.equal(500)))
    }
}
export default StatusCodesPage;