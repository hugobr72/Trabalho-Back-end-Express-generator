const mysql = require('mysql2');
require('dotenv').config()


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASENAME,
  password: process.env.DB_PASS,
});

module.exports = connection
