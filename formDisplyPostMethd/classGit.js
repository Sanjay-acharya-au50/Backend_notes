// const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(express.json())
// app.use(urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.post('/post_getdata', (req, res) => {
    let data = req.body;
    res.render("class.hbs", data)
    // res.send("success")
})

app.listen(5000, () => {
    console.log("server is live")
})

// send() => directly sends the response data
// render() => to render templates
// sendFile() => send html files on client