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
const onUpdateCharge = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = chargeId
  console.log(id)
  console.log(data)
  api.updateCharge(id, data)
    .then(ui.updateChargeSuccess)
    .catch(ui.failure)
}

const getChargeId = function (deleteButton) {
  console.log('here is the charge id')
  const elementId = $(deleteButton).parent().parent().attr('data-id')
  console.log(elementId)
  return elementId
}

const onDeleteCharge = function (event) {
  event.preventDefault()
  const deleteButton = event.target
  const data = getChargeId(deleteButton)
  api.deleteCharge(data)
    .then(() => {
      ui.deleteChargeSuccess(deleteButton)
    })
    .catch(ui.failure)
}
let chargeId = ''

const allowEdit = function (event) {
  event.preventDefault()
  const editButton = event.target
  chargeId = getChargeId(editButton)
  $('#edit-date').show()
  return chargeId
}

const addHandlers = () => {
  $('#getChargesButton').on('click', onGetCharges)
  $('#edit-date').on('submit', onUpdateCharge)
  $('#charge-content').on('click', '.remove-button', onDeleteCharge)
  $('#charge-content').on('click', '.edit-button', allowEdit)
}

module.exports = {
  addHandlers, // being required by index.js
  onGetOneToll // being required by tolls/ui.js
}

// add buttons don't appear when page loads so add click handler to parent instread of child
// on page load have tolls appear with buttons
// then use delete buttons on charges div to remove charges if necessary
