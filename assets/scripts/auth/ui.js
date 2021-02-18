'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Sign up Successful!')
  $('form').trigger('reset')
}

const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed ' + error.responseJSON.message)
}

const onSignInSuccess = function (response) {
  $('#message').text('Sign in Successful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed. Please try sigining in again!' + error.responseJSON.message)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Password change successful!')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Change password was not a success!' + error.responseJSON.message)
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('Sign out was a success!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out Failed' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onSignInFailure,
  onSignInSuccess
}
