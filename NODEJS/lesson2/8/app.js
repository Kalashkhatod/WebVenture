// const http = require("http");
// const server = http.createServer((req,res) =>{
//     if(req.url === '/'){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write("Start\n");
//     res.end("end");
//     }
//     else if(req.url === '/api/user'){
//     const user = {
//         name: 'kalash',
//         age: 19,
//         email: "kalash@gmail.com"
//         }
//     const data = JSON.stringify(user);
//     console.log(JSON.parse(data));
    
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(data);
//     }else if(req.url === "/login"){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("Login successfully");
//     }else if(req.url === "/signup"){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("Signup successfully");
//     }else{
//     res.writeHead(404,{'Content-Type':'text/html'});
//     res.end("<h1>Page not found</h1>");    
//     }
// })


// Handling a post method
// GET , POST, DELETE , PUT , PATCH
const http = require("http");
const server = http.createServer((req,res) =>{
if(req.method === "POST" && req.url === "/submit"){
    let body = "";
    req.on('data', (chunk)=>{
        body += chunk.toString(); // Convert Buffer to string
    })
        // End event triggered when all data received
    req.on('end',()=>{
        console.log(JSON.parse(body));
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({success:true, message: "Account created successfully."}))
    })
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({success:false, message: "Not Found!"})) 

     }
})
 
server.listen(8000,()=>{
    console.log('Sever listen at port 8000');
})