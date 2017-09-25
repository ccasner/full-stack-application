'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetCharges = (event) => {
  console.log('working')
  event.preventDefault()
  api.getCharges()
    .then(ui.getChargesSuccess)
    .catch(ui.failure)
}

const onAddCharge = (event) => {
  console.log('button working')
  event.preventDefault()
  api.addCharge()
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
