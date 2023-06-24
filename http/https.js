//  empty here

const http = require('http');


// // normal servr host using node


// const server = http.createServer();

// server.on('connection', ()=>{
//     console.log('established');
// })
// server.listen(5000);
// console.log('server is live');


// ------------------------------------------------

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('this is home page');
        res.end()
    }
    if(req.url == '/next'){
        res.write('this is the nex page');
        res.end()
    }
})

server.listen(5000);
console.log('loading...');

// ------------------------------------------------
