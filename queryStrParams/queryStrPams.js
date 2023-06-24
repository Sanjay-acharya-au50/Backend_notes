


/*


in crome console network it shows payload
*/
let express = require("express");

let app = express();

app.get("/val" , (req,res)=>{
    let data = req.query;
    console.log(data);
    res.send("suc")
})
// http://localhost:5000/val?name=sanju&bike=RS200 <-- URL
// val?name=sanju&bike=RS200 <-- QUERY STRING PARAMS

app.listen(5000, ()=>{
    console.log("loading");
})