
const express = require("express");
const app = express();
const hbs = require("hbs")

app.set("view engine", "hbs")
app.set("views", "../views");



app.get("/", (req,res)=>{
    // res.send("ello")
    res.render("index")
    // res.send("hello world from hbs");
})
const port = 5000;
app.listen(port,()=>{
    console.log(`server loading ${port}`);
});