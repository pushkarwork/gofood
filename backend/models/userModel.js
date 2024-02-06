const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("user", userSchema)