'use strict'

const config = require('./../config')

const store = require('./../store')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/workouts/' + data.workout._id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/workouts',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const show = function (data) {
//   console.log(data)
//   return $.ajax({
//     url: config.apiUrl + '/workouts/',
//     method: 'GET',
//     data: data,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

const destroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/workouts/' + data.workout._id,
    method: 'DELETE',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  // show,
  update,
  destroy
}
