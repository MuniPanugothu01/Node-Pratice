const express = require("express");
// const dotEnv = require("dotenv");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`port is connceted! ${PORT} runnig here`);
});
