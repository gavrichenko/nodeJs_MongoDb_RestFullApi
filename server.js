const express = require('express'),
  defaultPort = 3000,
  app = express(),
  port = process.env.PORT || defaultPort;

app.listen(port);

console.log('RESTful API server started on: ' + port);