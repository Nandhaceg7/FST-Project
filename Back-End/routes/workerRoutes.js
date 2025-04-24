const express = require('express')
const router = express.Router()

const Worker = require('../models/worker')


// Login worker
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await Worker.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).send("Invalid Credentials");
    }

    res.send("Login Success");
});


// Register worker
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send("All fields are required");
    }

    try {
        const newWorker = new Worker({ name, email, password });
        await newWorker.save();
        res.send(`Welcome, ${name}!`);
        console.log("\nName : ", name, "\nEmail : ", email);
        console.log("Worker created succcessfully");
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).send("Email already exists");
        } else {
            res.status(500).send("Server error");
        }
    }
});

module.exports = router