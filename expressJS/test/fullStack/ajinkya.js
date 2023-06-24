// Establishing connection with EXPRESS SERVER
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//Establishing Connection with MongoDB DataBAse
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// ------------------------------
// Mongoose Creating Schema
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  healthInsurance: {
    type: Boolean,
    default: false,
  },
});
// -------Data MoNgOOSE Modeling
//
const Employee = mongoose.model("Employee", employeeSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
app.get("/employees", (req, res) => {
  Employee.find((err, employees) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(employees);
    }
  });
});

// Extracting Code from Employee
app.get("/employees/:id", (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) {
      res.status(400).send(err);
    } else if (!employee) {
      res.status(404).send("Employee was not Found in DataBase");
    } else {
      res.send(employee);
    }
  });
});

//UpDating Employee DataBASE
app.put("/employees/:id", (req, res) => {
  // .....<>-------------------
  Employee.findByIdAndUpdate(
    req.params.id,
    //   ''''''''''''''''''''''''''''''''
    req.body,
    { new: true },
    (err, employee) => {
      if (err) {
        res.status(400).send(err);
      } else if (!employee) {
        res.status(404).send("Employee was not Found in DataBase");
      } else {
        res.send(employee);
      }
    }
  );
});
// --------------------------Searching and removing employee from the code--------------
// Removing An Employee
app.delete("/employees/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, employee) => {
    if (err) {
      res.status(400).send(err);
    } else if (!employee) {
      res.status(404).send("Employee was not Found in DataBase");
    } else {
      res.send("Employee Eliminated Easily");
    }
  });
});

// Updating insuranceHealth----------------
app.put("/employees/:id/updateInsurance", (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    { healthInsurance: !req.body.healthInsurance },
    { new: true },
    (err, employee) => {
      if (err) {
        res.status(400).send(err);
      } else if (!employee) {
        res.status(404).send("Employee was not Found in DataBase");
      } else {
        res.send(employee);
      }
    }
  );
});

// Server Started At Port3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
