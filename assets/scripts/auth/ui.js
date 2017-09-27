'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#sign-up').hide()
  $('#authmessage').text('Sign Up Successful!').show()
  $('#authmessage').delay(1000).fadeOut('slow')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#authmessage').text('Something went wrong, try again!').show()
  $('#authmessage').delay(1000).fadeOut('slow')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#authmessage').text('Sign In Successful!').show()
  $('#authmessage').delay(1000).fadeOut('slow')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#authbox').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#getChargesButton').show()
}
const signInFailure = function (error) {
  console.log(error)
  $('#authmessage').text('Something went wrong, try again!').show()
  $('#authmessage').delay(1000).fadeOut('slow')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#change-password').trigger('reset')
  $('#passwordMessage').text('Password Reset Successfully!').show()
  $('#passwordMessage').delay(1000).fadeOut('slow')
}
const changePasswordFailure = function (error) {
  console.log(error)
  $('#passwordMessage').text('Something went wrong, try again!').show()
  $('#passwordMessage').delay(1000).fadeOut('slow')
}

const signOutSuccess = function (data) {
  console.log(data)
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#authbox').show()
  $('#change-password').hide()
  $('#getChargesButton').hide()
  $('#hideChargesButton').hide()
  $('.charge-content').hide()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#signoutMessage').text('Sign Out Successful!').show()
  $('#signoutMessage').delay(1000).fadeOut('slow')
  store.user = null
}
const signOutFailure = function (error) {
  console.log(error)
  $('#signoutMessage').text('Something went wrong, try again!').show()
  $('#signoutMessage').delay(1000).fadeOut('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
