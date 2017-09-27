'use strict'

const config = require('../config')
const store = require('../store')

const addCharge = function (location, price, date) {
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'charge': {
        'location': location,
        'price': price,
        'date': date
      }
    }
  })
}

const updateCharge = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/charges/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCharge = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/charges/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getCharges = function () {
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getOneToll = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/tolls/' + data,
    method: 'GET'
  })
}

module.exports = {
  getCharges,
  addCharge,
  updateCharge,
  deleteCharge,
  getOneToll
}
