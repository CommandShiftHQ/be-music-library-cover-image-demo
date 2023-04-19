const express = require('express')
const cors = require('cors')
const artistRouter = require('./routes/artist')

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/artists', artistRouter)

app.get('*', (_, res) => {
  res.redirect('/')
})

module.exports = app
