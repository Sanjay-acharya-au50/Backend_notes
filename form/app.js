const express = require("express");

const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
// app.use(urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))



const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
// reference <->
mongoose.connect("mongodb://localhost:27017/formBackend", (err)=>{
    if(err){
        console.log("mongodb connection failed");
    }else{
        console.log("mongodb connection successfull");
    }
})

const mongoSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
})
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(3001, ()=>{
    console.log("db server : 3000");
})

// module.exports = mongoSchema;

const regStudents =  new mongoose.model("newregistration", mongoSchema );


app.post("/submit", async (req,res)=>{
    res.send("form submitted")
    const data = req.body;
    const user_email = data.email;
    const user_phone = data.phone;
    const user_query = data.query;

    console.log(req.body);
    const newStudent = new regStudents({email: user_email, phone: user_phone, query: user_query})
    const result = await newStudent.save()
    console.log(result);
    // res.redirect("/home");

})