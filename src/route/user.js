const express = require('express');
const router = express.Router();

const User= require('../model/authenticateUser')

//register user
router.post("/", async (req, res) => {
    try {
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

//get user data
router.get("/", async (req, res) => {
    try {
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});


//verify user authentication
router.post("/verify", async (req, res) => {
    try {
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});




module.exports=router;