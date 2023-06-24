// console.log('hello world');

const eventEmitter = require('events')

const emiter = new eventEmitter();


// -----------------------------------------------
// listen the events
// ("logged") ->  this should be same
emiter.on("logged", function(argument){
    console.log('got placed' ,argument,argument.name);
});

// emiter.on("logged", ()=>console.log('success 2'))


// -----------------------------------------------

// raise an events
emiter.emit("logged", {name: 'san'}) // this should be same