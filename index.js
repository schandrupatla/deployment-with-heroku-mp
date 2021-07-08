require('dotenv').config();
const cors = require("cors");//after the client installed
const path = require("path");//after the client installed
const express = require('express');
const server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname,'client/build')));
const PORT = process.env.PORT || 4000;

server.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,'client/build','index.html'));
})
server.get("/api",(req, res)=>{
    res.json({message:"web4.1-m4-module project works!"})
})
server.use((req, res)=>{
    res.json({mesaage:"Sorry could not server"});
})

server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
