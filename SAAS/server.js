const express = require('express');
let app = express();

app.get('/', (req, res) => {
  // res.send('Hello, is it me you looking for')
  // res.sendFile(__dirname + '/public/style.css');

  /*c1*/
  var path = require('path');
  app.use(express.static(path.join(__dirname, 'public')));
  /*c1*/
  /*c2*/
  // app.use(express.static(__dirname+ '/public'));
  /*c2*/
  res.sendFile(__dirname + '/public/index.html');
});
  /*c3*/
// app.get('/style.css', (req, res)=>{
//   res.sendFile(__dirname + '/public/style.css');
// })
  /*c3*/
// app.post('/')
app.get('/about', (req, res) => {
  res.send('<h1>about me</h1>');
});
app.get('/file', (req, res) => {
  res.send('<h1>about me</h1>');
});

app.listen(6699,() =>{
  console.log('server is up');
});
