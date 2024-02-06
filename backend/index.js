const express = require('express')
const app = express()
const mongoconnect = require('./db')
mongoconnect(); // MONGODB connection



app.use("/api", require("./Routes/userRoute"))
app.get('/', function (req, res) {
    res.send('Hello World')
})



app.listen(3000)