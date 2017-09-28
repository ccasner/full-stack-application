'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetTolls = () => {
  api.getTolls()
    .then(ui.getTollsSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetTolls
}
