const mongoose = require('mongoose');

const mongoconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/goFood");
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = mongoconnect;
