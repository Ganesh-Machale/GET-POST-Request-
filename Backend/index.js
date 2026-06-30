const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const  port = 8080;
app.get("/register",(req,res)=>{
  let {user,password} = req.query;
    res.send(`Standard Get response.Welcome ${user}`);
  });
  
  app.post("/register",(req,res)=>{
    res.send("Standard Post response");
  });

  app.listen(port,()=>{
    console.log("listening to port at ",port);
  });
   
 
