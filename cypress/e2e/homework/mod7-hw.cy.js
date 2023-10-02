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
import IframePage from "../../page-objects/iFramePage"

const homePage = new HomePage()

describe('my first scenario', () => {
    beforeEach(() => {
        homePage.visitPage()
    })
    
    it('test inputs', function() {
        homePage.clickInputTab()

        const inputPage = new InputPage()
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()

    })

    it('test checkbox', function() {
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    it('test dropdown list', function() {
        homePage.clickDropdownListTab()

        const dropdownPage = new DropDownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', function() {
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

    it('test basic auth', function() {
        homePage.clickBasicAuthTab()

        const basicAuthPage = new BasicAuthPage;
        basicAuthPage.loginWithValidCredentials()
        homePage.clickBasicAuthTab()
        basicAuthPage.loginWithInvalidCredentials()

    })

    it('test form', function() {
        homePage.clickFormTab()

        const formPage = new FormPage;
        formPage.submitFormWithValidData()
        formPage.submitFormWithValidDataByPressingEnter()
        formPage.tryToSubmitFormWithInvalidData()
    })

    it('test key presses', function() {
        homePage.clickKeyPressesTab()


        const keyPressesPage = new KeyPressesPage();
        keyPressesPage.clickKeyboardKeyAndCheckResult('{enter}', 'ENTER')
        keyPressesPage.clickKeyboardKeyAndCheckResult('r', 'R')
    })

    it('test data picker', function() {
        homePage.clickDatePickerTab()

        const datePickerPage = new DatePickerPage();
        datePickerPage.setValidDate()
        datePickerPage.tryToSetDateUnderMin()
        datePickerPage.tryToSetDateAboveMax()
    })

    it('test drag and drop', function() {
        homePage.clickDragAndDropTag()

        const dragAndDropPage = new DragAndDropPage();
        dragAndDropPage.dragAndDropColumnAToBUsingDragEvents()
        dragAndDropPage.dragAndDropColumnAToBUsingPlugin()
    })

    it('test add/remove elements', function() {
        homePage.clickAddRemoveElementsTab()

        const addRemoveElementsPage = new AddRemoveElementsPage();
        addRemoveElementsPage.addElement(1)
        addRemoveElementsPage.removeElement(0)
        addRemoveElementsPage.addElement(3)
        addRemoveElementsPage.removeElement(1)
    })

    it('test status codes', function() {
        homePage.clickStatusCodesTab()
        
        const statusCodesPage = new StatusCodesPage();
        statusCodesPage.check200()
        statusCodesPage.check305()
        statusCodesPage.check404()
        statusCodesPage.check500()
    })

    it('test iframe', function() {
        homePage.clickIframeTab()

        const iframePage = new IframePage()
        iframePage.clickButton1()
        iframePage.clickButton2UsingPlugin()
    })
})