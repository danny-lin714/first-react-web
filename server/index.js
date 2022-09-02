const express = require("express")
const app = express()

app.get("/api",(req,res)=>{
    res.json({"hi":"asd"})
})

app.listen(5000)