const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
var filename = 'question.txt';

Router.get('/',(req, res) => {
  let listQuestion = fileController.getQuestions(filename);
  let question = [];
  for (i=0;i<listQuestion.length;i++) {
    question[i] = JSON.stringify(listQuestion[i].content);
  }
  res.render('file',
  {
    question
  });
});

Router.get('/:id', (req, res) => {
  listQuestion = fileController.getQuestions(filename);
  let yesNum,noNum,question;
  for (i=0;i<listQuestion.length;i++) {
    if (req.params.id == listQuestion[i].id) {
      console.log(listQuestion[i]);
      question = JSON.stringify(listQuestion[i].content);
      yesNum = listQuestion[i].yes;
      noNum = listQuestion[i].no;
    }
  }
  console.log("question");
  res.render('getQuestion',
  {
    question,
    yesNum,
    noNum
  });
});

module.exports = Router;
