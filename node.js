const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('../lwsb/routes/users');

const app = express();

// DB Config
const db = require("./config/keys").dbURI;

// connect to mongodb
mongoose.connect(db)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.use(cors({
  origin: "http://localhost:3000/",
  methods: ["GET", "POST", "PUT"],
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use('/users', users);


module.exports = app;