'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const tollEvents = require('./tolls/events')
const chargeEvents = require('./charges/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  tollEvents.onGetTolls()
  chargeEvents.addHandlers()
})

// $('.div').on('click', chargeEvents.onAddCharge)
// $('ul#staticUl').on('click', 'li.dynamicLi', function (event) {
//   event.preventDefault()
//   console.log('button')
// })
