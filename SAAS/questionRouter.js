const express = require('express');
const Router = express.Router();

Router.get('/',(req, res) =>{
  res.send('Router');
});

Router.get('/addQuestion',(req, res) =>{
  res.send('Add Question');
  res.redirect();
});

Router.get('/getQuestion',(req, res) =>{
  res.send('Get Question');
});

module.exports = Router;
