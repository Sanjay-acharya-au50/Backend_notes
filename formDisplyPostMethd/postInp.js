const { urlencoded } = require('express')  // <- this is must otherwise we cant display using post method

let express = require("express");

let app = express();

app.set("view engine" , "hbs");
// app.set("views" , "folderName") we can place hbs file in other folder that path we can pass here to access

app.use(urlencoded({extended: true}))  // <- this is must otherwise we cant display using post method


app.get("/log", (req,res)=>{
    res.sendFile(__dirname + "/postInpt.html" , (err)=>{
        console.log(err);
    })
})

app.post("/postData", (req,res)=>{
    let data = req.body;
    // console.log(data);
    res.render("index.hbs", data)
    // res.send("suc")  
})


app.listen(5000, ()=>{console.log("loading");})