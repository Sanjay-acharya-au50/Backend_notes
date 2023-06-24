
let express = require("express");
let app = express();

app.get("/para/:id" , (req,res)=>{
    let data = req.params;
    console.log(data);
    res.send("success")
})

app.listen(5000, ()=>{
    console.log("loading");
})