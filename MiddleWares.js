const express = require("express");
const app = express();

const app2 = express();

// middle wares, if the conditon will statify then only send the requst to server other wise conditin will false then it won't sent to server.
app.use((req, res, next) => {
  if (10 > 20) {
    next();
  } else {
    console.log("cont sent the request to server beacuse condition is false");
  }
});

// first API server roter
app.get("/", (req, res) => {
  res.send("this is home!");
});
app.get("/about", (req, res) => {
  res.send("this is the about section");
});
app.get("/contact", (req, res) => {
  res.send("this is the contact section");
});

// first API server port number
let port = 3002;
app.listen(port, () => {
  console.log(`Port is connected here ${port}`);
});

// middleware for Second app2
let first = (req, res, next) => {
  // while we can assign to varible don't need to use the (app2.use)
  if (10 > 20) {
    next();
  } else {
    console.log("request not send to server bez condition is false!");
    res.status(403).send("Forbidden: Condition not met");
  }
};

let SECONDHandler = (req, res, next) => {
  if (10 < 20) {
    next();
  } else {
    console.log("cant send the request to server!");
    res.status(404).send("condition is not sent!");
  }
};

let ThirdHandler = (req, res, next) => {
  if (10 > 11) {
    next();
  } else {
    console.log("this third handler cant sent to the server!");
    res.status(405).send("condition is not valid here");
  }
};

let FOurthHandler = (req, res, next) => {
  if (1 > 2) {
    next();
  } else {
    console.log(
      "request not sent to the server beacuse of condition is false!"
    );
    res.status(403).send("condition is not for these router!");
  }
};

// second API server router, is (app2)

app2.post("/home", first, (req, res) => {
  res.send("data updated to server");
});

app2.get("/get", SECONDHandler, (req, res) => {
  res.send("server data get!");
});

app2.put("/put", ThirdHandler, (req, res) => {
  res.send("data updated!");
});

app2.patch("/patch",FOurthHandler,(req, res) => {
  res.send("data updated specific!");
});

// port assigned to the second API app2

let PORT = 4000;
app2.listen(PORT, () => {
  console.log(`port is connected is ${PORT}`);
});


// this is the another app 