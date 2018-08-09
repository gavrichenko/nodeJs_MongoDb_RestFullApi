const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Task = require('./api/models/todoListModel'); //created model loading here
const routes = require('./api/routes/todoListRoutes'); //importing route

// setting for web-server
const defaultPort = 3000,
  app = express(),
  port = process.env.PORT || defaultPort;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);