const mysql = require("mysql");
// connect MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wordsworth091094",
    database: "user",
});
module.exports = connection;