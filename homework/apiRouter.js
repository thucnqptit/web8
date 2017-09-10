const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
const filename = 'question.txt';

Router.post('/question', (req, res) => {
  let listQuestion = fileController.getQuestions(filename);
  let question = {
    id: listQuestion.length,
    content: req.body.question,
    yes: 0,
    no: 0
  }
  console.log(listQuestion.length);
  let data;
  if (listQuestion.length == 0) {
    data = JSON.stringify(question);
  } else {
    data = ",\n" + JSON.stringify(question);
  }
  fileController.addQuestion(filename,data);
  res.redirect(`/question/${question.id}`);
});

Router.post('/question/:id', (req, res) => {
  listQuestion = fileController.getQuestions(filename);
  for (i=0;i<listQuestion.length;i++) {
    if (req.params.id == listQuestion[i].id) {
      if (req.body.choice === 'yes') {
        listQuestion[i].yes += 1;
      } else {
        listQuestion[i].no += 1;
      }
    }
  }
  let tmp = "";
  for (i = 0; i < listQuestion.length; i++) {
    if (i == 0) {
      tmp += JSON.stringify(listQuestion[i]);
    } else {
      tmp += ",\n" + JSON.stringify(listQuestion[i]);
    }
  }
  fileController.saveFile(filename, tmp);
  res.redirect(`/question/${req.params.id}`);
});

module.exports = Router;
