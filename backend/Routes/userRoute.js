const express = require("express")
const router = express.Router()
const userModel = require("../models/userModel")

router.post("/createuser", async (req, res) => {
    try {
        await userModel.create({
            name: "pushkar",
            email: "pushkar@gmail.com",
            password: "123456",
            location: "molarband"
        })
        res.json({ success: true })

    } catch (error) {
        console.log(error, 'here is the errror')
        res.json({ success: false })

    }
})

module.exports = router