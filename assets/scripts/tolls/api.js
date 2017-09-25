'use strict'

const config = require('../config.js')

const getTolls = function () {
  return $.ajax({
    url: config.apiOrigin + '/tolls',
    method: 'GET'
  })
}

module.exports = {
  getTolls
}
