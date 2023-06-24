console.log('hello world');


const express = require('express')

const app = express();
app.use(express.json())

let name = 'san'


//  get method
app.get('/name', (req,res)=>{
    res.send("hello world")
})


app.listen(5000, ()=>{
    console.log("server is loading");
})