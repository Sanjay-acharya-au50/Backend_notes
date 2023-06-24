let express = require("express");

let app = express();

    app.set("view engine" , "hbs");

    app.get("/login", (req,res)=>{
        res.sendFile(__dirname + "/inputDisplay.html" , (err)=>{  // for html file
            console.log(err);
        })
    })

    app.get("/getData", (req,res)=>{
        data = req.query;
        console.log(data);
        res.render("index.hbs", data)    // for hbs file
    })


app.listen(5000, (req,res)=>{
    console.log("server loading");
})