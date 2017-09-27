'use strict'
const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const showCharges = require('../../styles/toll-table.handlebars')

const addChargeSuccess = () => {
  console.log('charge added')
  api.getCharges()
    .then(getChargesSuccess)
    .catch(failure)
}
const getOneTollSuccess = (data) => {
  console.log(data)
  console.log('get one toll success')
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
  console.log('charge deleted')
  $('#message2').text('Charge Deleted')
  $('#message2').delay(1000).fadeOut('slow')
  $(deleteButton).parent().parent().remove()
}

const updateChargeSuccess = () => {
  console.log('charge updated')
  $('#message2').text('Charge Updated')
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
}

const failure = (error) => {
  console.error(error)
  $('#message2').text('Something went wrong')
  $('#message2').delay(1000).fadeOut('slow')
}

module.exports = {
  addChargeSuccess,
  getChargesSuccess,
  getOneTollSuccess,
  updateChargeSuccess,
  deleteChargeSuccess,
  failure
}
