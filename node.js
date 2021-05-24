const express = require('express');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const dbController = require('./Controller/DatabaseController');
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.post("/register", async (req, res) => {
  var sql = "INSERT INTO user (firstName, lastName, username, password, email) VALUES (?, ?, ?, ?, ?)"
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  var parameters = [req.body.firstName, req.body.surname, req.body.username, hashedPassword, req.body.email]
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  results ? res.send('Success!') : res.send("Something went wrong");
})

// creating the login endpoint to connect with the front-end and database
app.post("/login", async (req, res) => {
  var sql = "SELECT * FROM user WHERE username = ?";
  var parameters = [req.body.username, req.body.password];
  var results = await dbController.SelectQuery(sql, parameters);
  const match = await bcrypt.compare(req.body.password, results[0].password);
  match ? res.send(results[0]) : res.send("Username/password combination are incorrect.");
});

app.put('/bio', async (req, res) => {
  var sql = "UPDATE user SET bio = ? WHERE userId = ?";
  var parameters = [req.body.bio, req.body.userId];
  var results = await dbController.InsertUpdateQuery(sql, parameters);
  res.status(200).send('Bio updated.');
});

app.post('/create', async (req, res) => {
  var sql = "INSERT INTO post (userId, postTitle, postContent) VALUES (?,?,?)"
  var parameters = [req.body.userId, req.body.title, req.body.content];
  var results = await dbController.InsertUpdateQuery(sql, parameters);
})

app.get('/getPosts', async (req, res) => {
  var sql = "SELECT post.postId, user.userId, user.username, post.postTitle, post.postContent, post.dateCreated FROM user INNER JOIN post ON user.userId = post.userId";
  var results = await dbController.SelectQuery(sql);
  res.send(results);
});

app.get('/users', async (req, res) => {
  var sql = "SELECT * FROM user";
  var results = await dbController.SelectQuery(sql);
  res.send(results);
});

app.post('/comment', async (req, res) => {
  var sql = "INSERT INTO comment (postId, userId, commentContent) VALUES (?,?,?)"
  var parameters = [req.body.postId, req.body.userId, req.body.content];
  var results = await dbController.InsertUpdateQuery(sql, parameters);
})

app.listen(5000);