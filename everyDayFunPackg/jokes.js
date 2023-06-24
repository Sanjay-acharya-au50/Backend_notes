console.log("hello world");

let express = require("express");


let app = express();

const all = require("everyday-fun");
 


app.get("/jokes", (req,res)=>{
    data = all.getRandomQuote()
    res.send(data)
})

app.listen(5000, ()=>{
    console.log("loading");
})