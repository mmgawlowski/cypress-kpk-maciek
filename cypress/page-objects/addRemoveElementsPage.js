const addButton = 'div.example>button';
const deleteButton = 'div#elements button[class="added-manually"]';

class AddRemoveElementsPage {
    addElementClickCount = 0;

    addElement(numberOfElements) {
        for (let i = 0; i < numberOfElements; i++) {
            cy.get(addButton).click()
            this.addElementClickCount++
        }
        cy.get(deleteButton).should('have.length', this.addElementClickCount)
    }

    removeElement(index) {
        if (this.addElementClickCount === 0) {
            cy.log('There is nothing to remove!')
        } else {
            cy.get(deleteButton).eq(index).click()
            this.addElementClickCount--
            if (this.addElementClickCount === 0) {
                cy.get(deleteButton).should('not.exist')
                cy.log('There are no more delete buttons')
            } else {
                cy.get(deleteButton).should('have.length', this.addElementClickCount)
            }
        }
    }

}
export default AddRemoveElementsPage;