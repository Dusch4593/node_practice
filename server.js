// dependency variable declarations
const express = require('express') // <-- backend
const MongoClient = require('mongodb').MongoClient // <-- database
const bodyParser = require('body-parser') // <-- json parser

// backend is instantiated and assigned to app variable
const app = express()

// set up the default port
const port = 8000

// when server starts, app will listen to port 8000 and log a message
app.listen(port, () => {  console.log('We are live on ' + port)})


