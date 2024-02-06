const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel")
const expressValidator = require("express-validator");
const { body, validationResult } = expressValidator;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const pvtKey = "nmbrdr";


router.post("/createuser", body("email").isEmail(), body("password").isLength({ min: 5 }), async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
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
        const passCompare = await bcrypt.compare(req.body.password, user.password)
        if (!passCompare) {
            return res.json({ error: "incorrect password" })
        }
        const jwtdata = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(jwtdata, pvtKey)

        return res.json({ success: true, authToken })
        // console.log(user.location)


    } catch (error) {

    }

})

module.exports = router