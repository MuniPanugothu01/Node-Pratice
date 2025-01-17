const express = require("http")
const app = express()
app.get('/',(req,res)=>{
    res.send("this is the express!")
});

let port = 3001;
app.listen(port,()=>{
    console.log(`port is! ${3001} is running`)
})