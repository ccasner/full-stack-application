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

const onAddCharge = () => {
  console.log('button working')
  event.preventDefault()
  const data = getFormFields(this)
  api.addCharge(data)
    .then(ui.addChargeSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getChargesButton').on('click', onGetCharges)
  $('#add').on('submit', onAddCharge)
}

module.exports = {
  addHandlers
}
