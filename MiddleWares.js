const express = require('express');
const app = express();

const app2 = express();


// middle wares, if the conditon will statify then only send the requst to server other wise conditin will false then it won't sent to server.
app.use((req,res,next)=>{
    if(10 < 20){
        next()
    }
    else{
        console.log('cont sent the request to server beacuse condition is false')
    }
})


// first API server roter
app.get('/',(req,res)=>{
    res.send('this is home!')
})
app.get('/about',(req,res)=>{
    res.send('this is the about section');
})
app.get('/contact',(req,res)=>{
    res.send('this is the contact section')
})

// first API server port number
let port = 3002;
app.listen(port,()=>{
    console.log(`Port is connected here ${port}`);
})


// second API server router, is (app2)