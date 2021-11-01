'use strict'

function logger (req,res,next){
   
    console.log(`Request: ${req.method} Path: ${req.path}`);
    
next();

   

}
module.exports=logger