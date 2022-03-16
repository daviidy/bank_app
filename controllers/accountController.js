'use strict'

// we call the model
const Account = require('../models/account')

// we call the module that will allow us to manipulate the DB
const accountDAO = require('../db/dao/accountDAO')

const accountController = (function () {
  const getAccounts = async (req, res) => {
    try {
      const accounts = await accountDAO.getAccounts()
      return accounts
    } catch (error) {
      res.status(500)
      res.render('50x', {error: error})
    }
  }

  const addAccount = async (req, res) => {
    // const accountNo = parseInt(req.body.accountNo)
    const accountNo = req.body.accountNo
    const custName = req.body.custName
    const type = req.body.type
    console.log(`type: ${type}`)
    const account = new Account(accountNo, custName, type)
    try {
      const opRes = await accountDAO.saveAccount(account)
      console.log(`Save Account in controller: ${opRes}`);
      return opRes;
    } catch (error) {
      res.status(500)
      res.render('50x', {error: error})
    }
  }

  return {
    getAccounts,
    addAccount
  }
})()

module.exports = accountController
