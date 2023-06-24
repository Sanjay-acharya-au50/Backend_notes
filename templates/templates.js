
/*


    --------------------------------


    res.send();
    res.render();
    res.sendFile();
    
    --------------------------------

    inside the variable instead of writing content we can write variable -> content will be constant what we written.
    we can change variable contnt from backend & we can update -> control from BACKEND

    -> these variable called by BACKEND


    to use templates we learned = hbs -> handle bars
    hbs is a package & used for creating templates

    ***
    views directory must


    we can say hbs is a part of FRONT END

*/


let express = require("express");

let app = express();

// to use hbs 
app.set("view engine", "hbs");


    app.get("/temp", (req,res)=>{
        res.render("temp.hbs" , {name : "sanju_93__"})
    })

    app.get("/head", (req,res)=>{
        res.render("temp.hbs" , {head : "dont be afreaid to achieve goal"})
    })

app.listen(5000 , ()=> console.log("server loading"))