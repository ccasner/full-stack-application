'use strict'

const showTolls = require('../../styles/toll-table.handlebars')
const chargeEvents = require('../charges/events')
const store = require('../store')

const getTollId = function (event) {
  event.preventDefault()
  const elementId = $(this).parent().parent().attr('data-id')
  store.tollId = elementId
}

const getTollsSuccess = (data) => {
  store.tolls = data.tolls
  const showTollsHtml = showTolls({ tolls: data.tolls })
  $('.content').append(showTollsHtml)
  $('.add-button').on('click', getTollId)
  $('.add-button').on('click', chargeEvents.onAddCharge)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTollsSuccess,
  failure
}
