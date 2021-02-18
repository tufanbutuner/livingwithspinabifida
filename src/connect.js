const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    port: 3308
});

// connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

const app = express();

// creating database
app.get('/created', (req, res) => {
  let sql = 'CREATE DATABASE spinabifida';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('database created');
  });
});

app.listen('3000', function() {
  console.log('Server started on port 3000');
});