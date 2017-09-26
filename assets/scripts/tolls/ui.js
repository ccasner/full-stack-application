'use strict'

const showTolls = require('../../styles/toll-table.handlebars')
const chargeEvents = require('../charges/events')
const store = require('../store')

const getTollId = function (event) {
  event.preventDefault()
  const elementId = $(this).parent().parent().attr('data-id')
  store.tollId = elementId
}
const getChargeId = function (event) {
  event.preventDefault()
  const elementId = $(this).parent().parent().attr('data-id')
  store.chargeId = elementId
}

const getTollsSuccess = (data) => {
  store.tolls = data.tolls
  const showTollsHtml = showTolls({ tolls: data.tolls })
  $('.content').append(showTollsHtml)
  $('.add-button').on('click', getTollId)
  $('.add-button').on('click', chargeEvents.onGetOneToll)
}
const getChargesSuccess = (data) => {
  store.charges = data.charges
  const showChargesHtml = showTolls({ charges: data.charges })
  $('.content').append(showChargesHtml)
  $('.remove-button').on('click', getChargeId)
  $('.remove-button').on('click', chargeEvents.onGetCharges)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTollsSuccess,
  getChargesSuccess,
  failure
}
