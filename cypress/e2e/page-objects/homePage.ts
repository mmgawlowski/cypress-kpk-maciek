import Urls from "./urls";

const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';
const dropdownListHeader = '#dropdownlist-header';
const hoversHeader = '#hovers-header';
const basicAuthHeader = '#basicauth-header';
const formHeader = '#form-header';
const keyPressesHeader = '#keypresses-header';
const dragAndDropHeader = '#draganddrop-header';
const addRemoveElementsHeader = '#addremoveelements-header';
const statusCodesHeader = '#statuscodes-header';
const iframeHeader = '#iframe-header';
const datePickerHeader = '#datepicker-header';


class HomePage {
    clickInputTab() {
        cy.get(inputsHeader).click();
    }
    clickCheckboxTab() {
        cy.get(checkboxHeader).click();
    }
    clickDropdownListTab() {
        cy.get(dropdownListHeader).click();
    }
    clickHoversTab() {
       cy.get(hoversHeader).click();
    }
    clickBasicAuthTab() {
        cy.get(basicAuthHeader).click();
    }
    clickFormTab() {
        cy.get(formHeader).click();
    }
    clickKeyPressesTab() {
        cy.get(keyPressesHeader).click();
    }
    clickDragAndDropTag() {
        cy.get(dragAndDropHeader).click();
    }
    clickAddRemoveElementsTab() {
        cy.get(addRemoveElementsHeader).click();
    }
    clickStatusCodesTab() {
        cy.get(statusCodesHeader).click();
    }
    clickIframeTab() {
        cy.get(iframeHeader).click();
    }
    clickDatePickerTab() {
        cy.get(datePickerHeader).click();
    }
    visitPage() {
        const url = new Urls();
        url.visitHomePage();
    }
}
export default HomePage;