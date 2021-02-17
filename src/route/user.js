const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/authenticateUser');

//register user
router.post("/register", async (req, res) => {
    try {

        const { name, email, password } = req.body;
        if (!name || !password || !email)
            return res.status(400).json({ msg: "not all field has been filled" });

        const existingUser = await User.findOne({ email: email });
        if (existingUser)
            return res.status(400).json({ msg: "email already exist choose another...." })

        const harshedPassword = await bcrypt.hash(password, 10);

        const newRegisteredUser = new User({
            name,
            email,
            password: harshedPassword
        });

        const savedUser = await newRegisteredUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});


//login
router.post("/login", async (req, res) => {
    
    try {

        const { name, password } = req.body;
        if (!name || !password)
            return res.status(400).json({ msg: "not all field has been filled" });

        //find if user exist
        const existingUser = await User.findOne({ name: name });
        if (!existingUser)
            return res.status(401).json({ msg: "authorization denied......." })

        //confirm password
        const confimedPassword = await bcrypt.compare(password, existingUser.password);
        if (!confimedPassword)
            return res.status(401).json({ msg: "authorization denied......." })

        // assign a web token
        const token = jwt.sign(
            {
                id: existingUser._id
            }
            , process.env.jwt_secret
        );

        // res.cookie("token", token,
        //     {
        //         httpOnly: true,
        //         expires: new Date(0)
        //     }).send();

        res.status(200).json({
            token
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});



//verify user authentication
router.post("/verify", async (req, res) => {
    try {
        const token = req.header("auth-token");
        if (!token)
            return res.json(false)

        const verifyToken = jwt.verify(token, process.env.jwt_secret);
        
        if (!verifyToken)
            return res.json(false);


        res.json(true)


    } catch (error) {
        res.status(500).json();
    }

});




module.exports = router;