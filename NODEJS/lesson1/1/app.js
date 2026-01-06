let a = 10;
let b = 20;

console.log(a + b);

function greet() {
    console.log("greet.");
}

// First class function
function greet1(fn){
fn();
}

greet1(greet);


// function expression

const fn = function(){
    console.log("Function Expression 1");
}
fn();

// use the function expression on the fly

greet1(function(){
    console.log("Function Expression 2");
});