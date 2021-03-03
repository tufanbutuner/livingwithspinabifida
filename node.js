const express = require('express');
const session = require('express-session');
const cors = require('cors')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const dbController = require('./Controller/DatabaseController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.post("/register", async (req, res) =>
{
  var sql = "INSERT INTO user (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)"
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  var parameters = [req.body.firstName, req.body.surname, req.body.username, hashedPassword, req.body.email]
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  results == 1 ? res.status(200).send("Success!") : res.status(400).send("Something went wrong");
})

app.post("/login", async (req, res) =>
{
  var sql = "SELECT * FROM user WHERE username = ?"
  var parameters = [req.body.username, req.body.password];
  var results = await dbController.SelectQuery(sql, parameters);
  const match = await bcrypt.compare(req.body.password, results[0].password);
  match ? res.status(200).send("Success!") : res.send("Something went wrong");
})
app.listen(5000);