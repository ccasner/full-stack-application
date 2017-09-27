'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetTolls = () => {
  api.getTolls()
    .then(ui.getTollsSuccess)
    .catch(ui.failure)
}

// const addHandlers = () => {
//   $('#getTollsButton').on('click', onGetTolls)
//   $('#clearTollsButton').on('click', onClearTolls)
// }

module.exports = {
  onGetTolls
}
