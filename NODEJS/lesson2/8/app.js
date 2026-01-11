const http = require("http");
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Start\n");
    res.end("end");
    }
    else if(req.url === '/api/user'){
    const user = {
        name: 'kalash',
        age: 19,
        email: "kalash@gmail.com"
        }
    const data = JSON.stringify(user);
    console.log(JSON.parse(data));
    
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(data);
    }else if(req.url === "/login"){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Login successfully");
    }else if(req.url === "/signup"){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Signup successfully");
    }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end("<h1>Page not found</h1>");    
    }
})

server.listen(8000,()=>{
    console.log('Sever listen at port 8000');
})