const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const passport = require('passport');
const userRoutes = require('./api/routes/api/user_routes');
const app = express();

// Import enviornment variables
dotenv.config({
  path: './config.env'
})

// Initiate body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Passport config initialization
app.use(passport.initialize());
require('./api/passport')(passport);

// Routes
app.use('/api/users', userRoutes);

module.exports = app;