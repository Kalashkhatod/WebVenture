const express = require("express");

// first step to create a web server
const app = express();

// Methods
// app.get
// app.post
// app.put
// app.patch
// app.delete


app.get("/home", (req,res)=> {
    const user = {
        name: "Goat",
        age: 19,
        email:"kalashkhatod@gmail.com",
        address:"Raipur"
    }
    res.send(user);
})


app.listen(8000, ()=>{

    console.log('Server listen at port 8000');
    
})