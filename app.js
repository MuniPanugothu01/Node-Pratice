const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("this is the express!");
});
app.get('/about',(req,res)=>{
    res.send("this is the about-us section!")
});
app.post('/contact',(req,res)=>{
    res.send("this is the contact section!")
})

let port = 3001;
app.listen(port, () => {
  console.log(`port is! ${3001} is running`);
});
