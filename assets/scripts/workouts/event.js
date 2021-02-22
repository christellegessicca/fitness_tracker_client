const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

const onCreateWorkout = function (event) {
  event.preventDefault()
  // get data from form
  const form = event.target
  const data = getFormFields(form)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdateWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const updatedData = getFormFields(form)
  api.update(updatedData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

// const onShowWorkout = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//   api.show(data)
//     .then(ui.onShowSuccess)
//     .catch(ui.onShowFailure)
// }

const onIndexWorkout = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onDestroyWorkout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.destroy(data)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreateWorkout,
  onIndexWorkout,
  onUpdateWorkout,
  onDestroyWorkout
}
