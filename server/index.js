const express = require("express")
const cors = require("cors")
const db = require('./config/db');

const app = express()
app.use(cors())

app.get("/api",(req,res)=>{
    res.json({"users":["userone","asd"]})
})
app.post("/api/user",(req,res)=>{
    req.json({})
})

app.listen(5000)