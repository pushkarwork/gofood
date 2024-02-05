const mongoose = require("mongoose")

const mongoconnect = async () => {

    await mongoose.connect("mongodb://localhost:27017").then(() => console.log("connected to db")).catch((err) => console.log(err))

}


module.exports = mongoconnect;