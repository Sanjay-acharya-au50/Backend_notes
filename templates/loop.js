

let express = require("express");

let app = express()

    app.set("view engine", "hbs");

    app.get("/loop", (req,res)=>{
        res.render("loop.hbs", {name : ["san", "sanz", "zen"]})
    })

app.listen(5000, ()=>console.log("loading"))