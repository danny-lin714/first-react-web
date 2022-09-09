const express = require("express")
const cors = require("cors")
const db = require('./config/db');

const app = express()
app.use(cors())
db.query('select * from user', function(err, rows) {
    if (err) throw err;
    console.log('Response: ', rows);
  });
app.get("/api",(req,res)=>{
    res.json({"users":["userone","asd"]})
})

app.post('/user', function (req, res) {
    var addData = req.body
    console.log(req.body)


    //  ? 會讀取後面的 addData
    db.query('INSERT INTO user SET ?', addData, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'products insert.' });
    });
});

app.listen(5000)