const express = require('express')
const mongoconnect = require('./db')
const app = express()
mongoconnect(); // MONGODB connection

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)