//all middelware in a neat place
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

exports.initRestMiddleware = function initRestMiddleware(app) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //in production set secure true in session
};