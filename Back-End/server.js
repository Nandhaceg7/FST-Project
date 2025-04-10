const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./user');

const app = express();
const PORT = 5000;

// Only one connection
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

// Worker schema
const workerSchema = new mongoose.Schema({
    name: String,
    role: String
});

const Worker = mongoose.model('Worker', workerSchema);

// Add worker
app.post('/addworker', async (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).send('All fields are required');
    }

    try {
        const newWorker = new Worker({ name, role });
        await newWorker.save();
        res.send(`Worker ${name} added successfully`);
    } catch (err) {
        res.status(500).send('Error adding worker');
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).send("Invalid Credentials");
    }

    res.send("Login Success");
});

// Register
app.post('/register', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


