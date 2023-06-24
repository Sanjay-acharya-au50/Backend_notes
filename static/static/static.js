const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.send('this is home page')
})

app.get('/about', (req,res)=>{
    res.send('this is about page')
})
app.get('/contact', (req,res)=>{
    res.send('this is contact page')
})



app.listen(5000, ()=>{
    console.log('loading...');
})