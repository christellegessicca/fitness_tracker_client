'use strict'
const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Created Successful!')
  $('form').trigger('reset')
}

const onCreateFailure = function (error) {
  $('#message').text('Create failed ' + error.responseJSON.message)
}

const onUpdateSuccess = function (response) {
  $('#message').text('Update Successful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onUpdateFailure = function (error) {
  $('#message').text('Update failed. Please try sigining in again!' + error.responseJSON.message)
  $('form').trigger('reset')
}

// const onShowSuccess = function (response) {
//   const workout = response.workouts._id
//   let workoutsHTML = ''
//   workout.forEach(workouts => {
//     const workoutHTML = (`
//     <h4>Workout Name: ${workouts.name}</h4>
//     <h4>Workout date: ${workouts.date.</h4>
//     <h4>Workout category: ${workouts.category.}</h4>
//     <h4>Workout workout ID: ${workouts._id}</h4>
//     `)
//     workoutsHTML += workoutHTML
//   })
//
//   $('#message').text('Show was a success!')
//   $('#displayworkout').html(workoutsHTML)
// }
//
// const onShowFailure = function (error) {
//   $('#message').text('Show was not a success!' + error.responseJSON.message)
// }

const onIndexSuccess = function (response) {
  const result = response.workouts
  console.log(result)
  let workoutsHTML = ''
  result.forEach(workouts => {
    const resultHTML = (`
    <h4>Workout Name: ${workouts.name}</h4>
    <h4>Workout date: ${workouts.date}</h4>
    <h4>Workout category: ${workouts.category}</h4>
    <h4>Workout workout ID: ${workouts._id}</h4>
    `)
    workoutsHTML += resultHTML
  })

  $('#message').text('Index was a success!')
  $('#displayworkout').html(workoutsHTML)
}

const onIndexFailure = function (error) {
  $('#message').text('Index failed' + error.responseJSON.message)
}

const onDestroySuccess = function (response) {
  $('#message').text('Deleted Successful!')
  $('form').trigger('reset')
  $('.authenticated').show()
}

const onDestroyFailure = function (error) {
  $('#message').text('Please try deleting again!' + error.responseJSON.message)
  $('.authenticated').show()
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  // onShowFailure,
  // onShowSuccess,
  onIndexFailure,
  onIndexSuccess,
  onUpdateFailure,
  onUpdateSuccess,
  onDestroySuccess,
  onDestroyFailure
}
