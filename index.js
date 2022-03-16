'use strict'

const express = require('express')
const path = require('path')
const homeRoutes = require('./routes/home/home')
const accountsRoutes = require('./routes/accounts/account')

const app = express()

// Define middlewares
// Setup the views folder and the view template engine middleware
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }))

// we telling express that every path starting with /assets
// should concern the public folder
app.use('/assets', express.static(path.join(__dirname, 'public')))

// Setup routes for homepage
app.use('', homeRoutes)

// Setup routes for account-related pages
app.use('/accounts', accountsRoutes)

app.use((req, res, next) => {
  console.log('Responding with the 404 Error page')
  res.status(404)
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

const PORT_NUMBER = 9000

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`)
})
