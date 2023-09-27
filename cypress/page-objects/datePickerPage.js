const dayjs = require('dayjs')
const datePicker = '#start';

class DatePickerPage {
    checkDatePicker(date) {
        const dateToSet = dayjs(date, 'YYYY-MM-DD').toDate();
        const minDate = dayjs('2020-01-01', 'YYYY-MM-DD').toDate();
        const maxDate = dayjs('2020-12-31', 'YYYY-MM-DD').toDate();
        cy.get(datePicker).type(date).should('have.value', date)
        if (dateToSet > maxDate) {
            cy.get(datePicker).invoke('prop', 'validity').its('rangeOverflow').should('be.true')
            cy.get(datePicker).then($datePicker => expect($datePicker[0].validationMessage).to.be.equal('Value must be 31/12/2020 or earlier.'))
        } else if (dateToSet < minDate) {
            cy.get(datePicker).invoke('prop', 'validity').its('rangeUnderflow').should('be.true')
            cy.get(datePicker).then($datePicker => expect($datePicker[0].validationMessage).to.be.equal('Value must be 01/01/2020 or later.'))
        } else {
            cy.get(datePicker).then($datePicker => expect($datePicker[0].checkValidity(), 'valid value').to.be.true)
        }  
    }

    setValidDate() {
        this.checkDatePicker('2020-04-16')
    }

    tryToSetDateUnderMin(){
        this.checkDatePicker('2019-12-31')
    }

    tryToSetDateAboveMax(){
        this.checkDatePicker('2021-01-01')
    }
}
export default DatePickerPage;