'use strict'
const store = require('../store')

const getChargesSuccess = (data) => {
  store.charges = data.charges
  console.log('charges here')
}

const addChargeSuccess = (data) => {
  console.log('charge added')
  console.log(data)
}
const getOneTollSuccess = (data) => {
  console.log('get one toll success')
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
