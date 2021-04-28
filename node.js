const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const dbController = require('./Controller/DatabaseController');
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); //body parser no longer required
app.use(express.json())

app.post("/register", async (req, res) => {
  // SQL statement to insert user info into user table in the db
  var sql = "INSERT INTO user (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)"
  // hashing the password using bcrypt and salt rounds (?)
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // taking user info from front end form with req.body and putting them into an array
  var parameters = [req.body.firstName, req.body.surname, req.body.username, hashedPassword, req.body.email]
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  results == 1 ? res.status(200).send("Success!") : res.status(400).send("Something went wrong");
})

app.post("/login", async (req, res) => {
  // SQL statement to get username from user table in the db
  var sql = "SELECT * FROM user WHERE username = ?";
  // taking username and password from front end with req.body and putting them into an array
  var parameters = [req.body.username, req.body.password];
  var results = await dbController.SelectQuery(sql, parameters);
  // using bcrypt to compare password written on front-end to password in the db
  const match = await bcrypt.compare(req.body.password, results[0].password);

  // checking if password matches one in the database, if so send results[0] back (row of user info from the db)
  match ? res.send(results[0]) : res.send("Username/password combination are incorrect.");
});
app.listen(5000);