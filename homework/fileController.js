var http = require('http');
var fs = require('fs');
var readImg = (options) => {
  var req = http.request(options, function(res) {
    res.setEncoding("binary") ;
    var data='';
    console.log(res);
    var file = fs.createWriteStream('public/img/image.png');
    res.pipe(file);

  });
  req.on('error', function(e) {
    console.log('error: ' + e.message);
  });
  req.end();
}
// const readFile = (filename, callback ) => {
//   fs.readFile(filename, {encoding : 'utf-8'},(err,data) => {
//       callback(data);
//   });
// }
const readFile = (filename) => {
  return fs.readFileSync(filename, {encoding: 'utf-8'});
}
const getQuestions = (filename) => {
  listQuestionString = "["+ readFile(filename) +"]";
  listQuestion = JSON.parse(listQuestionString);
  return listQuestion;
}
const saveFile = (filename, data) => {
  fs.writeFileSync(filename,data);
}
const addQuestion = (filename, data) => {
  fs.appendFileSync(filename,data);
}
module.exports = {
  readImg,
  readFile,
  getQuestions,
  addQuestion,
  saveFile
}
