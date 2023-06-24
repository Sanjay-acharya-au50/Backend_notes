// Establishing connection with EXPRESS SERVER
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//Establishing Connection with MongoDB DataBAse
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB", {
}, ()=>{
  console.log("loading");

});
// ------------------------------
// Mongoose Creating Schema
const employeeSchema = new mongoose.Schema({
  firstname: String,
  lastname : String
  // id: String,
  // position : String,
  // salary : Number,
  // insurance : Boolean,
});
// -------Data MoNgOOSE Modeling
//
const Employee = mongoose.model("Employee", employeeSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello")
})

// Inserting Newly Joined Employeee
app.post("/employees", (req, res) => { 
  const employee = new Employee(req.body);
  employee.save((err, employee) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(employee);
    }
  });
});

// get all employees
// app.get("/employees", (req, res) => {
//   Employee.find((err, employees) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.send(employees);
//     }
//   });
// });

// Extracting Code from Employee ERRRRRR
// app.get("/employees/:_id", (req, res) => {
//   Employee.findById(req.params.id, (err, employee) => {
//     if (err) {
//       res.status(400).send(err);
//     } else if (!employee) {
//       res.status(404).send("Employee was not Found in DataBase");
//     } else {
//       res.send(employee);
//     }
//   });
// });


//UpDating Employee DataBASE
// app.put("/employees/:_id", (req, res) => {
//   // .....<>-------------------
//   Employee.findByIdAndUpdate(
//     req.params.id,
//     //   ''''''''''''''''''''''''''''''''
//     req.body,
//     { new: true },
//     (err, employee) => {
//       if (err) {
//         res.status(400).send(err);
//       } else if (!employee) {
//         res.status(404).send("Employee was not Found in DataBase");
//       } else {
//         res.send(employee);
//       }
//     }
//   );
// });

app.listen(5000, ()=>{
    console.log("loding port : 5000");
})