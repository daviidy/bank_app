'use strict'

const express = require('express')
const path = require('path')
const accountRouter = express.Router()

// we call the controller related to the account entity 
// we will use each function inside that controller 
// according to each path

const accountController = require('../../controllers/accountController')

accountRouter.get('/list', async (req, res, next) => {
  console.log('list of accounts')
  const accounts = await accountController.getAccounts(req, res)
  console.log(accounts)
  res.render('accounts/index', {
    accounts: accounts
  })
})

accountRouter.post('/add', async (req, res, next) => {
  console.log('add a new account')
  const accounts = await accountController.addAccount(req, res)
  console.log(accounts)
  res.redirect(303, '/accounts/list')
})

module.exports = accountRouter
