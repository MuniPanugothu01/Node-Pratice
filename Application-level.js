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
const app2 = express(); // Initialize express

// Middleware function
let MiddleHandleFunction = (req, res, next) => {
  console.log(`Request method is ${req.method} and the URL is ${req.url}`);
  next();
};

// Use middleware
app2.use(MiddleHandleFunction);

// Define routes
app2.get("/", (req, res) => {
  res.send("This is home - second app21");
});
app2.post("/about", (req, res) => {
  res.send("This is the about section for app22");
});
app2.put("/put", (req, res) => {
  res.send("This is the PUT method! app22");
});

// Start the server
const Port = 3002;
app2.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

// Router level middle-Ware, first example on Router level middle ware;

const router = express.Router();

let RouterMiddleHandlezFun = (req, res, next) => {
  console.log(`router method ${req.method}  and url is ${req.url}`);
  next();
};

router.use(RouterMiddleHandlezFun);
// Define the route within the route
router.get("/", (req, res) => {
  // res.send("router level home!cc");
  res.json({message:'get users data!'})
});

router.post("/POST", (req, res) => {
  res.send("this is the router level POST");
});

router.put("/PUT", (req, res) => {
  res.send("this router level PUT Method!");
});

// Mount the router on app
app.use("/user", router);

app.get("/appH", (req, res) => {
  res.send("this is seperate APP!");
});

app.listen(3004, () => {
  console.log(`running port is ${3004}`);
});



