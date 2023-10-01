const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDropPage {
    
    dragAndDropUsingDragEvents(dragSelector, dropSelector) {
        const dataTransfer = new DataTransfer();
        let dragElementText;
        
        cy.get(dragSelector).then($dragElement => dragElementText = $dragElement.text())
        cy.get(dragSelector).trigger('dragstart', {dataTransfer})
        cy.get(dragSelector).trigger('dragenter').should('have.class', 'over')
        cy.get(dragSelector).invoke('attr', 'style').should('contain', 'opacity: 0.4')
        cy.get(dropSelector).trigger('dragenter').should('have.class', 'over')
        cy.get(dropSelector).trigger('drop', {dataTransfer})
        cy.get(dragSelector).trigger('dragend')
        cy.get(dragSelector).invoke('attr', 'style').should('contain', 'opacity: 1')
        cy.get(dropSelector).should('not.have.class', 'over')
        cy.get(dropSelector).should($dropElement => expect($dropElement.text()).to.be.equal(dragElementText))
    }

    dragAndDropUsingPlugin(dragSelector, dropSelector) {
        let dragElementText;
        
        cy.get(dragSelector).then($dragElement => dragElementText = $dragElement.text())
        cy.get(dragSelector).drag(dropSelector).then((complete) => expect(complete).to.be.true)
        cy.get(dropSelector).should('not.have.class', 'over')
        cy.get(dropSelector).should($dropElement => expect($dropElement.text()).to.be.equal(dragElementText))
    }

    dragAndDropColumnAToBUsingDragEvents() {
        this.dragAndDropUsingDragEvents(columnA, columnB)
    }

    dragAndDropColumnAToBUsingPlugin() {
        this.dragAndDropUsingPlugin(columnA, columnB)
    }
}
export default DragAndDropPage;