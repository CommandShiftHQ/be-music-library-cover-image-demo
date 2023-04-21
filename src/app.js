const express = require('express')
const cors = require('cors')
const artistRouter = require('./routes/artist')
const admin = require('firebase-admin')
const serviceAccount = require('../cert.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/artists', artistRouter)

app.get('*', (_, res) => {
  res.redirect('/')
})

module.exports = app
