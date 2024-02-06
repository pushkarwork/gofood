const express = require("express")
const router = express.Router()
const userModel = require("../models/userModel")
const expressValidator = require("express-validator")
const { body, validationResult } = expressValidator;

router.post("/createuser", body("email").isEmail(), body("password").isLength({ min: 5 }), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        res.json({ success: true })

    } catch (error) {
        console.log(error, 'here is the errror')
        res.json({ success: false })

    }
})

router.post("/loginUser", async (req, res) => {
    const email = req.body.email;

    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ error: "incorrect email" })
        }
        if (req.body.password !== user.password) {
            return res.json({ error: "incorrect password" })
        }

        return res.json({ success: true })
        // console.log(user.location)


    } catch (error) {

    }

})

module.exports = router