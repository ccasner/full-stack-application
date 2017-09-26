'use strict'

const config = require('../config')
const store = require('../store')

const addCharge = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/charges',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCharge = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/charges/' + store.charge.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteCharge = function () {
  return $.ajax({
    url: config.apiOrigin + '/charges/' + store.charge.id,
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
const getOneToll = function () {
  return $.ajax({
    url: config.apiOrigin + '/tolls/' + store.tolls.id,
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
