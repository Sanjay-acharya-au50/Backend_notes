

// res.send();
// res.render();
// res.sendFile();

let express = require("express");
let app = express();

    app.get("/sendFile" , (req,res)=>{
        res.sendFile(__dirname + "/index.html", (err)=>{
            console.log(err)
        })
    } )

app.listen(5000, ()=>{
    console.log("server laoding");
})