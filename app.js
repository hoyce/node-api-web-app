const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

/**
 * Connect to Mongo database
 */
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database on url: ', process.env.DATABASE_URL))

/**
 * Set the server to accept JSON
 */
app.use(express.json())

/**
 * API routes
 */
const apiRoutes = require('./routes/apiRoutes')
app.use('/api', apiRoutes)

/**
 * WEB routes
 */
const webRoutes = require('./routes/webRoutes')
app.use('/', webRoutes)

/**
 * Start server
 */
const server = app.listen(3000, () => {
  console.log('- - - - - Server started and listening on port: ', server.address().port, ' - - - - -')
})
