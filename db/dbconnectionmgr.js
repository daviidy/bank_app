/**
 * dbconnectionmgr.js
 */
'use strict'
const mysql = require('mysql2')
const dbConfig = require('./dbconfig')

// the manager
const dbConnectionMgr = (function (dbConfig) {
  /**
     * Makes and returns a Database connection pool using the given configuration
     */
  const getConnection = function () {
    return mysql.createPool(dbConfig)
  }
  return {
    getConnection: getConnection
  }
})(dbConfig)

module.exports = dbConnectionMgr
