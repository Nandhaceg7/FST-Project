const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Allow big JSON (for base64 image)

// MongoDB connection
const MONGO_URI =
  "mongodb+srv://nandha:123nandha@cluster0.lqtgmgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Schema
const Worker = mongoose.model("Worker", {
  name: String,
  phoneno: String,
  age: String,
  categoryOfWork: String,
  address: String,
  pincode: String,
  image: String, // store base64 image
});

// POST route
app.post("/api/workers", async (req, res) => {
  try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).json({ message: "Worker added" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
