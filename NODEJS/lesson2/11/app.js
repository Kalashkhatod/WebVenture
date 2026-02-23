import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoute from "./router/user.js";


dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware
app.use(bodyParser.urlencoded({extended:true}))// middleware

app.use("/api/v1/user",userRoute);

// app.post("/api/v1/user/register", (req,res) => { //after middleware response is returned
//       const obj = req.body;
//       console.log(obj);

//       res.status(200).json({
//             success: true,
//             message: "Account created successfully."
//       })
// })
// app.post("/api/v1/user/login", (req,res) => { //after middleware response is returned
//       const {email, password} = req.body;
//       console.log(email,password);
      
//       // save date in database

//       res.status(200).json({
//             success: true,
//             message: "login successfully."
//       })
// })




app.listen(PORT, ()=>{
      console.log(`Server listen at port ${PORT}`); //`` used for dynamic data
    
});