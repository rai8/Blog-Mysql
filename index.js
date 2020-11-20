const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db')
const PORT = process.env.PORT

//initilitializing datbase
require('./db')
// setting up middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//setting up routes
app.get('/', (req, res) => {
  res.send('Hello there')
})

//listening to the server
app.listen(PORT, () => console.log(`----------server is up and running---------`))
