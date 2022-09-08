const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.get("/api",(req,res)=>{
    res.json({"users":["userone","asd"]})
})
app.post("/api/user",(req,res)=>{
    req.json({})
})

app.listen(5000)