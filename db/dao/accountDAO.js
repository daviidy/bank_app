'use strict'

// we call the manager
const dbConnectionMgr = require('../dbconnectionmgr')

// revealing module pattern

const accountDAO = (function () {
  // const getAccounts = function() {
  //     const accounts = [];
  //     accounts.push(new Account(1001, "Apple iPhone 15", 1700));
  //     accounts.push(new Account(1002, "Samsung Android S22", 1500));
  //     accounts.push(new Account(1001, "Google Pixel 11", 1200));
  //     return accounts;
  // }
  const getAccounts = async () => {
    const qryStrGetAccounts = 'select * from `accounts`'
    try {
      // we connect to the db
      const dbConnection = dbConnectionMgr.getConnection()
      // we execute the query
      const [accounts] = await dbConnection.promise().query(qryStrGetAccounts)
      return accounts
    } catch (error) {
      console.log(`DB Access Error: ${error}`)
      throw error
    }
  }

  const saveAccount = async (data) => {
    console.log(data.type)
    const cmdStrSaveAccount = `insert into accounts (number, custName, type) values ('${data.accountNo}', '${data.custName}', '${data.type}')`
    console.log(`SQL Insert Command String: ${cmdStrSaveAccount}`)
    try {
      const dbConnection = dbConnectionMgr.getConnection()
      const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount)
      return saveOpResult
    } catch (error) {
      console.log(`DB Access Error: ${error}`)
      throw error
    }
  }

  return {
    getAccounts,
    saveAccount
  }
})()

module.exports = accountDAO
