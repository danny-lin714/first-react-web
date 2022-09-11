const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const db = require('./config/db');

const app = express()
const jsonParser = bodyParser.json()
app.use(cors())



app.get("/api",(req,res)=>{
    res.json({"users":["userone","asd"]})
})

app.post("/user",jsonParser,(req, res)=>{
    console.log(req.body)
    var user_name = req.body.user_name
    var user_account = req.body.user_account
    var user_password = req.body.user_password
    db.query('INSERT INTO user SET ?', {
        "user_name" : user_name,
        "user_account" : user_account,
        "user_password" : user_password
    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'products insert.' });
    });

    
    /*
    
    */
});

app.listen(5000)