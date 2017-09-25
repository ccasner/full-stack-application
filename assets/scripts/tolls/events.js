'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetTolls = (event) => {
  event.preventDefault()
  api.getTolls()
    .then(ui.getTollsSuccess)
    .catch(ui.failure)
}

const onClearTolls = (event) => {
  event.preventDefault()
  ui.clearTolls()
}

const onAddTolls = (event) => {
  event.preventDefault()
  api.addCharge()
  .then(ui.addChargeSuccess)
  .catch(ui.failure)
}

const addHandlers = () => {
  $('#getTollsButton').on('click', onGetTolls)
  $('#clearTollsButton').on('click', onClearTolls)
  $('#add-button').on('click', onAddCharge)
}

module.exports = {
  addHandlers
}
