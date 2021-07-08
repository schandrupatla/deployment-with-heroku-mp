require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 4000;
server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
server.get("/api",(req, res)=>{
    res.json({message:"web4.1-m4-module project works!"})
})
