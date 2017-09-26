'use strict'
const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const showCharges = require('../../styles/toll-table.handlebars')

// const getChargesSuccess = (data) => {
//   store.charges = data.charges
//   console.log(store.charges)
//   const showChargesHtml = showTolls({ charges: data.charges })
//   $('.content').append(showChargesHtml)
//   $('.delete-charge').on('click', function () {
//     const chargeId = $(this).parent().parent().attr('data-id')
//     console.log('this will delete wine # ' + chargeId)
//     $(this).parent().parent().remove()
//     api.deleteCharge(data, chargeId)
//       .then(console.log('deleteChargeSuccess'))
//       .catch(failure)
//   })
//   $('.edit-charge').on('submit', function (event) {
//     const data = getFormFields(this)
//     event.preventDefault()
//     const chargeId = $(this).parent().attr('data-id')
//     console.log('button working ' + 'data is ' + data)
//     console.log(data)
//     api.editCharge(data, chargeId)
//       .then(console.log('updateChargeSuccess'))
//       .catch(failure)
//   })
// }

const addChargeSuccess = () => {
  console.log('charge added')
}
const getOneTollSuccess = (data) => {
  console.log(data)
  console.log('get one toll success')
  const onAddCharge = (data) => {
    const location = data.toll.location
    const price = data.toll.price
    const date = '2017-09-09'
    api.addCharge(location, price, date)
      .then(addChargeSuccess)
      .catch(failure)
  }
  onAddCharge(data)
}
const getChargeId = function (event) {
  event.preventDefault()
  console.log('here is the charge id')
  const elementId = $(this).parent().parent().attr('data-id')
  store.chargeId = elementId
  console.log(elementId)
}
const deleteChargeSuccess = () => {
  console.log('charge deleted')
}
const onDeleteCharge = function () {
  const data = store.chargeId
  api.deleteCharge(data)
    .then(deleteChargeSuccess)
    .catch(failure)
}
const updateChargeSuccess = () => {
  console.log('charge updated')
}
const onUpdateCharge = function () {
  const data = store.chargeId
  const date = '2017-09-08'
  api.updateCharge(data, date)
    .then(updateChargeSuccess)
    .catch(failure)
}

const getChargesSuccess = (data) => {
  store.charges = data.charges
  const showChargesHtml = showCharges({ charges: data.charges })
  $('.content').append(showChargesHtml)
  $('.remove-button').on('click', getChargeId)
  $('.remove-button').on('click', onDeleteCharge)
  $('.edit-button').on('click', getChargeId)
  $('.edit-button').on('click', onUpdateCharge)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  addChargeSuccess,
  getChargesSuccess,
  getOneTollSuccess,
  failure
}
