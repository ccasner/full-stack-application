'use strict'
const store = require('../store')
const api = require('./api')
const showCharges = require('../../styles/toll-table.handlebars')

const addChargeSuccess = () => {
  $('#message2').text('Charge Added, set date!').show()
  $('#message2').delay(1000).fadeOut('slow')
  $('#edit-date').hide()
  api.getCharges()
    .then(getChargesSuccess)
    .catch(failure)
}
const getOneTollSuccess = (data) => {
  const onAddCharge = (data) => {
    const location = data.toll.location
    const price = data.toll.price
    const date = '0000-00-00'
    api.addCharge(location, price, date)
      .then(addChargeSuccess)
      .catch(failure)
  }
  onAddCharge(data)
}

const deleteChargeSuccess = (deleteButton) => {
  $('#message2').text('Charge Deleted').show()
  $('#message2').delay(1000).fadeOut('slow')
  $(deleteButton).parent().parent().remove()
}

const updateChargeSuccess = () => {
  $('#message2').text('Charge Updated').show()
  $('#message2').delay(1000).fadeOut('slow')
  $('#edit-date').hide()
  $('#edit-date').trigger('reset')
  api.getCharges()
    .then(getChargesSuccess)
    .catch(failure)
}

const getChargesSuccess = (data) => {
  store.charges = data.charges
  const showChargesHtml = showCharges({ charges: data.charges })
  $('.charge-content').html(showChargesHtml)
  $('#getChargesButton').hide()
  $('#hideChargesButton').show()
  $('.add-button').show()
}
const hideChargesSuccess = () => {
  $('#hideChargesButton').hide()
  $('#getChargesButton').show()
}

const failure = () => {
  $('#message2').text('Something went wrong').show()
  $('#message2').delay(1000).fadeOut('slow')
}

module.exports = {
  addChargeSuccess,
  getChargesSuccess,
  getOneTollSuccess,
  updateChargeSuccess,
  deleteChargeSuccess,
  hideChargesSuccess,
  failure
}
