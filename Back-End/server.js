const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const workerRoutes = require('./routes/workerRoutes');

const PORT = 5000;

const app = express();


// Only one connection
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes)
app.use('/api/workers',workerRoutes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


