'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Sign Up Successful!')
}
const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Sign In Successful!')
  store.user = data.user
}
const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('Password Reset Successfully!')
}
const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
}

const signOutSuccess = function (data) {
  console.log(data)
  $('#message').text('Sign Out Successful!')
  store.user = null
}
const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Something went wrong, try again!')
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
