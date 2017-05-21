var path = require('path');
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com    ",
    user: "pyigd0vxl4080c21",
    password: "cicz4pddpz5ryh2m",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
