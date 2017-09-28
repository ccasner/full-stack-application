'use strict'

const config = require('../config')
const store = require('../store')

const getTolls = function () {
  return $.ajax({
    url: config.apiOrigin + '/tolls',
    method: 'GET'
  })
}
const getOneToll = function () {
  return $.ajax({
    url: config.apiOrigin + '/tolls/' + store.tolls.id,
    method: 'GET'
  })
}

module.exports = {
  getTolls,
  getOneToll
}
