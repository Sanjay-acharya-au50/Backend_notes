console.log('hello world');


const express = require('express')

const app = express();
app.use(express.json())

let name = 'san'


//  get method
app.get('/name', (req,res)=>{
    res.send(name)
})

app.get('/', (req,res)=>{
    res.send('this is home page')
})

app.get('/name/:lastName', (req,res)=>{
    let lastName = req.params.lastName;
    name = name + " " + lastName;
    res.send(name)
})

//  post method
app.post('/name/update',(req,res)=>{
    let new_name = req.body.name;
    let middle_Name = req.body.middleName;
    let last_Name = req.body.lastName;
    
    let name = new_name + " " +  middle_Name + " " + last_Name;
    res.send(name);
})


// {
//     "name" : "san",
//     "middleName" : "m",
//     "lastName" : "acharya"

// }

// put method

app.put('/name/next', (req,res)=>{
    let newName = req.body.name;
    console.log(name);
    name = newName;
    res.send(newName)
    console.log(name);

})


// post Man
// {
//     "name" : "man"
// }

//  delete method
app.delete('/remove', (req,res)=>{
    res.send('this page removed')
})



app.listen(5000, ()=>{
    console.log('loading');
})

