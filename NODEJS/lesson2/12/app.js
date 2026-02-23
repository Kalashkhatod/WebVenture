import express from "express";

const app = express();

app.use(function (req,res,next){ //next function wont allow us to move forward
    console.log("Middleware is called"); // we need to call the next funtion
    next();
})

app.get("/", (req,res)=>{
    console.log("HomePage is called");
    res.send("hello")
})

app.listen(8000, ()=>{

    console.log("server listen at port 8000");
    
});