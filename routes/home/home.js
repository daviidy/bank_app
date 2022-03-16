'use strict'

const express = require('express')
const path = require('path')
const homeRouter = express.Router()

// Define home page routes
homeRouter.get('/', (req, res) => {
  console.log('Presenting homepage')
  //   res.sendFile(path.join(__dirname, '../../views', 'index.html'))
  res.render('index')
})

module.exports = homeRouter
