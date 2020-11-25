const mysql = require("mysql");
const dbConf = require("./dbconfig.js");

const connection = mysql.createConnection({
  host: dbConf.HOST,
  user: dbConf.USER,
  password: dbConf.PASSWORD,
  database: dbConf.DB,
});

connection.connect((error) => {
  if (error) return;
  console.log("Connected to the database");
});

module.exports = connection;
