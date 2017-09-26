'use strict'
const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const showTolls = require('../../styles/toll-table.handlebars')

// const getChargesSuccess = (data) => {
//   store.charges = data.charges
//   console.log(store.charges)
//   const showChargesHtml = showTolls({ charges: data.charges })
//   $('.content').append(showChargesHtml)
//   $('.delete-charge').on('click', function () {
//     const chargeId = $(this).parent().parent().attr('data-id')
//     console.log('this will delete wine # ' + chargeId)
//     $(this).parent().parent().remove()
//     api.deleteCharge(data, chargeId)
//       .then(console.log('deleteChargeSuccess'))
//       .catch(failure)
//   })
//   $('.edit-charge').on('submit', function (event) {
//     const data = getFormFields(this)
//     event.preventDefault()
//     const chargeId = $(this).parent().attr('data-id')
//     console.log('button working ' + 'data is ' + data)
//     console.log(data)
//     api.editCharge(data, chargeId)
//       .then(console.log('updateChargeSuccess'))
//       .catch(failure)
//   })
// }




const addChargeSuccess = () => {
  console.log('charge added')
}
const getOneTollSuccess = (data) => {
  console.log(data)
  console.log('get one toll success')
  const onAddCharge = (data) => {
    const location = data.toll.location
    const price = data.toll.price
    const date = '2017-09-09'
    api.addCharge(location, price, date)
      .then(addChargeSuccess)
      .catch(failure)
  }
  onAddCharge(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getChargesSuccess,
  addChargeSuccess,
  getOneTollSuccess,
  failure
}
