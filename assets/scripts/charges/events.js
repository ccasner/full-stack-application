'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = ('../../lib/get-form-fields')

const onGetCharges = (event) => {
  console.log('working')
  event.preventDefault()
  api.getCharges()
    .then(ui.getChargesSuccess)
    .catch(ui.failure)
}

const onAddCharge = (event) => {
  event.preventDefault()
  console.log('button working')
  const data = getFormFields(this)
  api.addCharge(data)
    .then(ui.addChargeSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getChargesButton').on('click', onGetCharges)
  $('#add-button').on('click', onAddCharge)
}

module.exports = {
  addHandlers
}

// add buttons don't appear when page loads so add click handler to parent instread of child
// on page load have tolls appear with buttons
// then use delete buttons on charges div to remove charges if necessary
