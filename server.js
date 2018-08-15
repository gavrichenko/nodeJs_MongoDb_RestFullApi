const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Task = require('./api/models/todoListModel'); //created model loading here
const Flower = require('./api/models/flowersModel'); //created model loading here
const routes = require('./api/routes/todoListRoutes'); //importing route

// setting for web-server
const defaultPort = 3000,
  app = express(),
  port = process.env.PORT || defaultPort;

// mongoose instance connection url connection
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost/lovelyHouse';
mongoose.Promise = global.Promise;
mongoose
  .connect(CONNECTION_URI, {
    useMongoClient: true,
    /* other options */
  })
  .then(() => console.log(`Connected to MongoDb succefully on: ${ CONNECTION_URI }`))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Cross-Origin Resource Sharing
app.use(cors());
routes(app);
app.listen(port,
  () => console.log('RESTful API server started on: ' + port));




/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
    return res.status(200).json({})
  }
  next();
});
*/