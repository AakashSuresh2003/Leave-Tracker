const dotenv = require("dotenv").config();
const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Leave Tracker");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
