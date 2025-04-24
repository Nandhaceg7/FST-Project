const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
       return res.status(401).send("Invalid Credentials");
    }

    res.send("Login Success");
});

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send(`Welcome, ${name}!`);
        console.log("\nName : ", name, "\nEmail : ", email);
        console.log("User created succcessfully");
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).send("Email already exists");
        } else {
            res.status(500).send("Server error");
        }
    }
});

module.exports = router 