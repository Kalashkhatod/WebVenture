const greet = require("./greet");

greet.hindi();
greet.english();
console.log(greet);


// Another way

const {hindi, english} = require("./greet"); //destructure

hindi();
english();