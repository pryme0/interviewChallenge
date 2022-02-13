/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//initialize express app
const app = express();

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//  INITIALIZE BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//IMPORT ROUTES
 const indexRoute = require('./routes/index.js');

app.use('/', indexRoute);

// UNHANDLE ROUTE RESPONSE
app.all('*', (req, res) => {
  res.status(404).send({
    statusCode: 404,
    message: `OOPs!! from game rank api. Server can't find ${req.originalUrl}.
    This could be a typographical issue. 
    Check the API specification for further guidance`,
  });
});

// UNHANDLED ERRORS
app.use((error, req, res, next) => {
  console.log(error);
  return res.status(500).json(new Error('Server error, try again'));
});

module.exports = app;
