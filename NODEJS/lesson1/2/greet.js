// Module -> A piece of code that is used accross all the nodejs application
function greet(a,b){
    console.log("Hello Kalash Goat", a+b);
}

// module.exports = greet;

// module.exports;  //prints function

function sub(a,b){
   const res = a > b ? a - b : b - a;
   return res;
}
module.exports = {
    greet,
    sub
}


