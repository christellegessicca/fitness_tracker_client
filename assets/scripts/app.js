'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/event')
const workoutEvents = require('./workouts/event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // user listeners
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#create').on('submit', workoutEvents.onCreateWorkout)
  $('#update').on('submit', workoutEvents.onUpdateWorkout)
  $('#index').on('submit', workoutEvents.onIndexWorkout)
  $('#show').on('submit', workoutEvents.onShowWorkout)
  $('#destroy').on('submit', workoutEvents.onDestroyWorkout)
})
