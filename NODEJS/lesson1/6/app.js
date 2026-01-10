
const { log } = require("console");
const fs = require("fs");

// // Javascript is synchronous but node js is Asynchronous

// // Reading file

// console.log("Before Reading 1");
// fs.readFile("hello.txt", 'utf-8', (err,data)=>{ // This is Asynchronous 
//     if(err) throw err; //Means that if this takes longer time it will be executed later
//     console.log(data+"1");
// });
// console.log("After Reading 1");


// // Same result // But this is Synchronous
// console.log("After Reading 2 ");
// const data = fs.readFileSync("hello.txt","utf-8");
// console.log(data+"2");
// console.log("Before Reading 2 ");


// //Writting File // it will delete previous data/text.
// fs.writeFile("hello.txt", "Welcome Kalash",(err)=>{
//     if(err) throw err;
// })

// Use this to add more content in file
// fs.appendFile("hello.txt","\nWelcome Kalash",(err)=>{
//     if(err) throw err;
// })

// unlink = delete file
// fs.unlink("hello.txt",(err)=>{
//     if(err) throw err;
// });


// Recommended to read big files

// const readStream = fs.createReadStream("hello.txt","utf-8");
// readStream.on('data', (chunk)=>{
// console.log(chunk);
// });


// readStream.on('end',()=>{
//     console.log("Reading Completed");
// })

// const writeStream = fs.createWriteStream("hello.txt","utf-8");

// writeStream.write("to Nodejs"); //Deletes previous text

// pipe
const readStream = fs.createReadStream("hello.txt");

const writeStream = fs.createWriteStream("hello1.txt");

writeStream.write("Goat\n");

readStream.pipe(writeStream);