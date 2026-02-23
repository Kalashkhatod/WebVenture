export const register = (req,res) => {

      console.log("Register is called after middleware");
      const obj = req.body;
      console.log(obj);

      res.status(200).json({
            success: true,
            message: "Account created successfully."
      })}


export const login =  (req,res) => { 
      const {email, password} = req.body;
      console.log(email,password);
      
      // save date in database

      res.status(200).json({
            success: true,
            message: "login successfully."
      })}