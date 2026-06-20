require("dotenv").config();
const express = require("express");
const cors = require("cors");

const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Investment Agent Backend Running");
});


app.use("/api/analyze", analyzeRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});