const express = require("express");

// first step to create a web server
const app = express();

// Methods
// app.get
// app.post
// app.put
// app.patch
// app.delete


// app.get("/home", (req,res)=> {
//     const user = {
//         name: "Goat",
//         age: 19,
//         email:"kalashkhatod@gmail.com",
//         address:"Raipur"
//     }
//     res.send(user);
// })

app.get("/api/user1/product/:productId/comment/:commentId", (req,res) => {
    // const id = req.params.productId; // destructuring
    const {productId,commentId} = req.params; //this is another method for destructuring
    console.log(productId,commentId);
    
    const product = {
        id: productId,
        name: "Macbook M4 Pro"
    };

    res.status(200).json({
        success: true,
        product,
    });
})

app.listen(8000, ()=>{

    console.log('Server listen at port 8000');
    
})