const express = require('express');
const app = express();


app.use((req,res,next)=>{
    if(10 < 20){
        next()
    }
    else{
        console.log('cont sent the request to server beacuse condition is false')
    }
})


app.get('/',(req,res)=>{
    res.send('this is home!')
})
app.get('/about',(req,res)=>{
    res.send('this is the about section');
})
app.get('/contact',(req,res)=>{
    res.send('this is the contact section')
})


let port = 3002;
app.listen(port,()=>{
    console.log(`Port is connected here ${port}`);
})