const express = require("express");
const app = express();

// Application-level MiddlWare function
app.use((req, res, next) => {
  console.log(`request Method: ${req.method} and the urkl is ${req.url}`);
  next(); // it pass the next function or router
});

app.get("/", (req, res) => {
  res.send("this is the home section!");
});

app.post("/about", (req, res) => {
  res.send("this is the post method!");
});

// assignin the port to the server or app
let PORT = 4001;
app.listen(PORT, () => {
  console.log(`port is the ${PORT} is connected!`);
});
