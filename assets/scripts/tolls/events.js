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

const addHandlers = () => {
  $('#getTollsButton').on('click', onGetTolls)
  $('#clearTollsButton').on('click', onClearTolls)
}

module.exports = {
  addHandlers
}
