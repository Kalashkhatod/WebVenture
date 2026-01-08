const Emitter = require("./emitter");

const emittr = new Emitter();

emittr.on("greet",function(){
    console.log("Hello");
    
})

emittr.on("greet",function(){
    console.log("Hello1");
    
})

emittr.emit("greet");

