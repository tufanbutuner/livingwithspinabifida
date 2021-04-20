const express = require('express');
const session = require('express-session');
const cors = require('cors')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbController = require('./Controller/DatabaseController');

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post("/register", async (req, res) => {
  var sql = "INSERT INTO user (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)"
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  var parameters = [req.body.firstName, req.body.surname, req.body.username, hashedPassword, req.body.email]
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  results == 1 ? res.status(200).send("Success!") : res.status(400).send("Something went wrong");
})

app.post("/login", async (req, res, next) => {
  var sql = "SELECT * FROM user WHERE username = ?"
  var parameters = [req.body.username, req.body.password];
  var results = await dbController.SelectQuery(sql, parameters);
  const match = await bcrypt.compare(req.body.password, results[0].password);

  if (match) {
    // req.session.username = results;
    // console.log(req.session.username);
    res.send(results);
  } else {
    res.send("Something went wrong, please try again.");
  }
  // match ? res.status(200).send("Success!") : res.send("Something went wrong");
  console.log(match);
  // console.log(req.session.username);
});

// app.get('/', (req, res) => {
//   // res.render('home', {message : 'Welcome, ' + req.session.username});
//   res.status(200).send({message : 'Welcome, ' + req.session.username});
// });

// app.post("/profile", (req, res) => {
//   res.render('home', {message : 'Welcome, ' + req.session.username});
// })
app.listen(5000);