const express = require("express");

const router = express.Router();
 const path = require("path")




router.get("/", (req, res) => {
    
    res.sendFile('templet/index.hrml')
  });
  
  app.get("/about", (req, res) => {
    res.json({ harry: 25 });
  });
  

  module.exports=router;