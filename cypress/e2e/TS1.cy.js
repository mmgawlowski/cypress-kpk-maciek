import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropDownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"
import BasicAuthPage from "../page-objects/basicAuthPage"
import FormPage from "../page-objects/formPage"
import KeyPressesPage from "../page-objects/keyPressesPage"
import DatePickerPage from "../page-objects/datePickerPage"

const homePage = new HomePage()

describe('my first scenario', () => {
    beforeEach(() => {
        homePage.visitPage()
    })
    
    it('test inputs', function() {
        // const homePage = new HomePage();
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
})