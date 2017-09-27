'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#sign-up').hide()
  $('#message').text('Sign Up Successful!')
  $('#message').delay(1000).fadeOut('slow')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
  $('#message').delay(1000).fadeOut('slow')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#message').text('Sign In Successful!').show()
  $('#message').delay(1000).fadeOut('slow')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#getChargesButton').show()
}
const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
  $('#message').delay(1000).fadeOut('slow')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#change-password').trigger('reset')
  $('#passwordMessage').text('Password Reset Successfully!')
  $('#passwordMessage').delay(1000).fadeOut('slow')
}
const changePasswordFailure = function (error) {
  console.log(error)
  $('passwordMessage').text('Something went wrong, try again!')
  $('#passwordMessage').delay(1000).fadeOut('slow')
}

const signOutSuccess = function (data) {
  console.log(data)
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#getChargesButton').hide()
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#message').text('Sign Out Successful!')
  $('#message').delay(1000).fadeOut('slow')
  store.user = null
}
const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
  $('#message').delay(1000).fadeOut('slow')
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
