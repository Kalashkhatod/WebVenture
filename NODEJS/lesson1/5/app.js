// const Emitter = require("./emitter"); // My custom module 
const Emitter = require("events"); // in-built module (core nodejs module) //Same result
const emittr = new Emitter();

const obj = require("./config").events;

// bad practice

// emittr.on("greet",function(){
//     console.log("Hello");
    
// })

// emittr.on("greet",function(){
//     console.log("Hello1");
    
// })

// emittr.emit("greet");


emittr.on(obj.GREET, function(){
    console.log("Greet");
}
);
emittr.on(obj.FILESAVED, function(){
    console.log("file saved successfully");
}
);
emittr.on(obj.FILEOPEN, function(){
    console.log("file opened successfully");
}
);

emittr.emit(obj.GREET);
emittr.emit(obj.FILESAVED);
emittr.emit(obj.FILEOPEN);
