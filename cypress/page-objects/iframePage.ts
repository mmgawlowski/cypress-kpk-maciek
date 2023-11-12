const iframe = 'div#iframe-content iframe';
const button1 = '#simpleButton1';
const button2 = '#simpleButton2';
const result = 'p#whichButtonIsClickedMessage';

class IframePage {
    getIframeBody() {
        return cy.get(iframe).its('0.contentDocument.body').should('not.be.empty');
    }
    
    clickButton1() {
      this.getIframeBody().find(button1).click();
      this.getIframeBody().find(result).should('have.text', 'Button 1 was clicked!');
    }

    clickButton2UsingPlugin() {
        cy.enter(iframe).then(getBody => {
            getBody().find(button2).click();
            getBody().find(result).should('have.text', 'Button 2 was clicked!');
        });
    }
}
export default IframePage;