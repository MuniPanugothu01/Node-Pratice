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

// second example on application level middleware.

const app2 = require("express");

// middleware
let MiddleHandleFunction = (req, res, next) => {
  console.log(`request method is ${req.method} and the url is ${req.url}`);
  next();
};

app2.use(MiddleHandleFunction);

app2.get("/", (req, res) => {
  res.send("this is home second app21");
});
app2.post("/about", (req, res) => {
  res.send("this is the about section for app22");
});

app2.put("/put", (req, res) => {
  res.send("this is the put method!app22");
});

const Port = 3002;
app2.listen(Port, () => {
  console.log(`port is connected ${Port}`);
});
