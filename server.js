const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DATABASE =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch(err => console.log("MongoDB Error:", err));

// ================= ROUTES =================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});




const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
console.log("MONGO URI:", process.env.MONGO_URI);
const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/exam", require("./routes/examRoutes"));
const cors = require("cors");
app.use(cors());
app.use(express.json());