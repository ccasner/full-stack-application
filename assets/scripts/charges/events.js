'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onGetCharges = (event) => {
  console.log('working')
  event.preventDefault()
  api.getCharges()
    .then(ui.getChargesSuccess)
    .catch(ui.failure)
}
const onAddCharge = () => {
  const charge = store.charge
  console.log(charge)
  // api.addCharge(location, price, date)
  //   .then(ui.addChargeSuccess)
  //   .catch(ui.failure)
}
const onGetOneToll = () => {
  const tollId = store.tollId
  api.getOneToll(tollId)
    .then(ui.getOneTollSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getChargesButton').on('click', onGetCharges)
}

module.exports = {
  addHandlers,
  onAddCharge,
  onGetOneToll
}

// add buttons don't appear when page loads so add click handler to parent instread of child
// on page load have tolls appear with buttons
// then use delete buttons on charges div to remove charges if necessary
