import InputPage from "../../page-objects/inputPage"
import HomePage from "../../page-objects/homePage"
import CheckboxPage from "../../page-objects/checkboxPage"
import DropDownListPage from "../../page-objects/dropdownListPage"
import HoversPage from "../../page-objects/hoversPage"
import BasicAuthPage from "../../page-objects/basicAuthPage"
import FormPage from "../../page-objects/formPage"
import KeyPressesPage from "../../page-objects/keyPressesPage"
import DatePickerPage from "../../page-objects/datePickerPage"
import DragAndDropPage from "../../page-objects/dragAndDropPage"
import AddRemoveElementsPage from "../../page-objects/addRemoveElementsPage"
import StatusCodesPage from "../../page-objects/statusCodesPage"
import IframePage from "../../page-objects/iframePage"


describe('Exercises', () => {
    const homePage = new HomePage();
    const inputPage = new InputPage();
    const checkboxPage = new CheckboxPage();
    const dropdownPage = new DropDownListPage();
    const hoversPage = new HoversPage();
    const basicAuthPage = new BasicAuthPage();
    const formPage = new FormPage();
    const keyPressesPage = new KeyPressesPage();
    const datePickerPage = new DatePickerPage();
    const dragAndDropPage = new DragAndDropPage();
    const addRemoveElementsPage = new AddRemoveElementsPage();
    const statusCodesPage = new StatusCodesPage();
    const iframePage = new IframePage();
    
    beforeEach(() => {
        homePage.visitPage();
    })
    
    it('test inputs', function() {
        homePage.clickInputTab();
        inputPage.typeNumberIntoField();
        inputPage.typeLettersIntoField();
    })

    it('test checkbox', function() {
        homePage.clickCheckboxTab();
        checkboxPage.checkFirstCheckbox();
        checkboxPage.uncheckLastCheckbox();
    })

    it('test dropdown list', function() {
        homePage.clickDropdownListTab();
        dropdownPage.chooseDropdownListFirstOption();
    })

    it('test hover', function() {
        homePage.clickHoversTab();
        hoversPage.hoverOverElement();
    })

    it('test basic auth', function() {
        homePage.clickBasicAuthTab();
        basicAuthPage.loginWithValidCredentials();
        homePage.clickBasicAuthTab();
        basicAuthPage.loginWithInvalidCredentials();
    })

    it('test form', function() {
        homePage.clickFormTab();
        formPage.submitFormWithValidData();
        formPage.submitFormWithValidDataByPressingEnter();
        formPage.tryToSubmitFormWithInvalidData();
    })

    it('test key presses', function() {
        homePage.clickKeyPressesTab();
        keyPressesPage.clickKeyboardKeyAndCheckResult('{enter}', 'ENTER');
        keyPressesPage.clickKeyboardKeyAndCheckResult('r', 'R');
    })

    it('test data picker', function() {
        homePage.clickDatePickerTab();
        datePickerPage.setValidDate();
        datePickerPage.tryToSetDateUnderMin();
        datePickerPage.tryToSetDateAboveMax();
    })

    it('test drag and drop', function() {
        homePage.clickDragAndDropTag();
        dragAndDropPage.dragAndDropColumnAToBUsingDragEvents();
        dragAndDropPage.dragAndDropColumnAToBUsingPlugin();
    })

    it('test add/remove elements', function() {
        homePage.clickAddRemoveElementsTab();
        addRemoveElementsPage.addElement(1);
        addRemoveElementsPage.removeElement(0);
        addRemoveElementsPage.addElement(3);
        addRemoveElementsPage.removeElement(1);
    })

    it('test status codes', function() {
        homePage.clickStatusCodesTab();
        statusCodesPage.check200();
        statusCodesPage.check305();
        statusCodesPage.check404();
        statusCodesPage.check500();
    })

    it('test iframe', function() {
        homePage.clickIframeTab();
        iframePage.clickButton1();
        iframePage.clickButton2UsingPlugin();
    })
})