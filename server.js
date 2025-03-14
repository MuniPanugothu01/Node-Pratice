const express = require("express");
const dotEnv = require("dotenv");
// require("dotenv").config();
dotEnv.config();

// mongoose client require
const { MongoClient } = require("mongodb");

const app = express();

MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch(() => {
    console.log("mongodb not connected!");
  });

app.get("/home", (req, res) => {
  res.send("this is home section");
});

// console.log(process.env);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`port is connceted! ${PORT} runnig here`);
});


