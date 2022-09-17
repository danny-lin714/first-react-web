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

app.post("/login",jsonParser,(req,res)=>{
    var user_account = req.body.user_account
    var user_password = req.body.user_password
    
    db.query('SELECT * FROM user',function(error,result){
        var t=0
        if (error) throw error;
        for(var i in result){
            if(user_account==result[i].user_account){
                if(user_password==result[i].user_password){
                    t=1
                    return res.status(200).send("hello"+" "+result[i].user_name)
                }
            }
        }
        if(t==0){
            return res.status(400).send("login again")
        }
    })
    
})
/*
-------------------------------------------------------------------------------------------------------
使用者操作
*/
app.get("/user",(req,res)=>{
    db.query('SELECT * FROM user',function(error,result){
        console.log(result)
        if (error) throw error;
        return res.send({data:result})
        })
    });
app.post("/user",jsonParser,(req, res)=>{
    console.log(req.body)
    var user_name = req.body.user_name
    var user_account = req.body.user_account
    var user_password = req.body.user_password
    if (user_name =='' & user_account=='' & user_password==''){
        res.sendStatus(404);
    }else{
        db.query('INSERT INTO user SET ?', {
            "user_name" : user_name,
            "user_account" : user_account,
            "user_password" : user_password
        }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'products insert.' });
        });
    }
    

});
/*
-------------------------------------------------------------------------------------------------
*/

app.listen(5000)