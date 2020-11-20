const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db')
const PORT = process.env.PORT || 3000
const router = require('./routes/routes')

//initilitializing datbase
require('./db')
// setting up middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//setting up static files- express----
app.use(express.static(__dirname + '/public'))

//setting the view engine
app.set('view engine', 'ejs')

//setting up routes
app.use('/', router)

//listening to the server
app.listen(PORT, () => console.log(`----------server is up and running---------`))
