export const isAuthenticated =  (req,res,next)=> { //next function wont allow us to move forward
    console.log("Middleware is called"); // we need to call the next funtion
    next();
}