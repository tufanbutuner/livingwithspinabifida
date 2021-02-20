const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dbController = require('./Controller/DatabaseController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.post("/register", async (req, res) =>
{
  var sql = "INSERT INTO user (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)"
  var parameters = [req.body.firstName, req.body.surname, req.body.username, req.body.password, req.body.email]
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  results == 1 ? res.status(200).send("Success!") : res.status(400).send("Something went wrong");
})

app.listen(5000);