

// morgan is a middleware package
// in this package we can get time taken for excecuting code 
// GET / 304 - - 4.593 ms
// GET /product 200 22 - 0.927 ms

let express = require("express");
let morgan = require("morgan")

let app  = express();
    app.use(morgan("tiny"))


    app.get("/", (req,res,next)=>{
        res.send("hello world");
        next()
    })

    app.get("/product",(req,res)=>{
    res.send("this is a product page");
    })

app.listen(5000, ()=>{
    console.log("server loading");
})