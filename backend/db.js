const mongoose = require('mongoose');

const mongoconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/goFood");
        const fetched_data = mongoose.connection.db.collection("food_items");
        const fetched_foodCategory = mongoose.connection.db.collection("foodCategory")
        const Category = await fetched_foodCategory.find({}).toArray()
        const data = await fetched_data.find({}).toArray()
        global.food_items = data;
        global.foodCategory = Category;
       
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = mongoconnect;
