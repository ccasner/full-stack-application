'use strict'

const showTolls = require('../../styles/toll-table.handlebars')

const getTollsSuccess = (data) => {
  console.log(data)
  const showTollsHtml = showTolls({ tolls: data.tolls })
  $('.content').append(showTollsHtml)
  $('.add-button').on('click', function () {
    $(this).parent().parent().remove()
  })
}

const clearTolls = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getTollsSuccess,
  clearTolls,
  failure
}
