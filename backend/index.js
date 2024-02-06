const express = require('express')
const app = express()
const mongoconnect = require('./db')
const cors = require('cors');
mongoconnect(); // MONGODB connection
const expressValidator = require("express-validator")


app.use(express.json());
app.use(cors());

// app.use(expressValidator)
app.use("/api", require("./Routes/userRoute"))
app.get('/', function (req, res) {
    res.send('Hello World')
})



app.listen(3000)