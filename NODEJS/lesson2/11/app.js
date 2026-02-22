import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/v1/user/register", (req,res) => {
      const obj = req.body;
      console.log(obj);

      res.status(200).json({
            success: true,
            message: "Account created successfully."
      })
})


app.listen(PORT, ()=>{
      console.log(`Server listen at port ${PORT}`); //`` used for dynamic data
    
});