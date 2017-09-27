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
// const startCharges = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: '{}'
//   })
// }
// const addCharge = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/charges',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// const getCharges = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/charges',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getTolls,
  getOneToll
}
