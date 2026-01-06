const obj = require("./package.json");

function greet(){
    console.log(obj.english);
    
}

module.exports = greet;