const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
var filename = 'question.txt';

Router.get('/', (req, res) => {
  let questions = fileController.getQuestions(filename);
  data = questions[Math.floor(Math.random() * listQuestion.length)];
  question = JSON.stringify(data.content);
  res.render('home',
  {
    question,
    link : "/api/question/" + data.id
  });
});

module.exports = Router;
