const fs = require('fs');//file system
//let// gia tri trong block scope
//var// gia tri trong funcition scope
const saveFileSync = (filename, data) => {
  fs.writeFileSync(filename, data);
}
const readFileSync = (filename) => {
  return fs.readFileSync(filename, {encoding : 'utf-8'});
}
const readFile = (filename, callback ) => {
  fs.readFile(filename, {encoding : 'utf-8'},(err,data) => {
      callback(data);
  });
}
module.exports = {
  saveFileSync ,
  readFileSync,
  readFile
}
