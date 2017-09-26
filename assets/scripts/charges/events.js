'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')


const onGetCharges = () => {

  api.getCharges()
    .then(ui.getChargesSuccess)
    .catch(ui.failure)
}

const onGetOneToll = () => {
  const tollId = store.tollId
  api.getOneToll(tollId)
    .then(ui.getOneTollSuccess)
    .catch(ui.failure)
}
const onDeleteCharge = (event) => {
  event.preventDefault()
  const chargeId = getFormFields(this)
  console.log(chargeId)
  api.deleteCharge(chargeId)
    .then(ui.deleteChargeSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getChargesButton').on('click', onGetCharges)
  $('#deleteChargeButton').on('click', onDeleteCharge)
}

module.exports = {
  addHandlers,
  onDeleteCharge,
  onGetOneToll
}

// add buttons don't appear when page loads so add click handler to parent instread of child
// on page load have tolls appear with buttons
// then use delete buttons on charges div to remove charges if necessary
