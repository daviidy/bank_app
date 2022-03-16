'use strict'

// the model is a clqss that contains the attributes and methods
// of the account entity

function Account (accountNo, custName, type) {
  this.accountNo = accountNo
  this.custName = custName
  this.type = type
}

module.exports = Account
