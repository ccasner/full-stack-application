'use strict'
const store = require('../store')
const api = require('./api')

const getChargesSuccess = (data) => {
  store.charges = data.charges
  console.log(store.charges)
}

const addChargeSuccess = () => {
  console.log('charge added')
}
const getOneTollSuccess = (data) => {
  console.log(data)
  console.log('get one toll success')
  const onAddCharge = (data) => {
    const location = data.toll.location
    console.log(location)
    const price = data.toll.price
    console.log(price)
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
