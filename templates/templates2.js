let express = require("express");
let app = express()

app.set("view engine", "hbs");

//  to check the age is greater or not
//  this value will be come from front end this is just to specify fun written
// if we didnt pass variable in res.render -> it will b undefined and print else
    function check(age){
        if(age >= 18){
            return true;
        }
        else return false;
    }

    app.get("/verifyAge", (req,res)=>{
        res.render("temp2.hbs", {age:check(3), message : "you're a legend", message2 : "you are not a legend" })
    })


app.listen(5000, ()=>{
    console.log("server loading");
})