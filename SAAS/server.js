const express = require('express');
const handlebars = require('express-handlebars');
const viewRouter = require('./questionRouter');
let app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.use('/question', viewRouter);
// app.use(express.static(__dirname+ '/public'));
app.get('/', (req, res) => {
  res.render('addQuestion');
  // res.send('Hello, is it me you looking for')
  // res.sendFile(__dirname + '/public/style.css');

  // let jsonObj = {proa : "aa", prob : "bb"}
  // let jsonString =JSON.stringify(jsonObj);
  // jsonObj = JSON.parse(jsonString);

  /*c1*/

  /*c1*/
  /*c2*/
  // app.use(express.static(__dirname+ '/public'));
  /*c2*/
  // res.render('home');
});
app.post('/', (req,res) =>{
  console.log('post question');
})
app.post('/question', (req,res) =>{
  console.log("save file now");
})
var path = require('path');
app.get('/',(req,res) => {
  res.render('home');
})
app.use(express.static(path.join(__dirname, 'public')));
  /*c3*/
// app.get('/style.css', (req, res)=>{
//   res.sendFile(__dirname + '/public/style.css');
// })
  /*c3*/
// app.post('/')
// app.get('/about', (req, res) => {
//   res.render('about');
// });
app.get('/file', (req, res) => {
  res.send('<h1>about me</h1>');
});

app.listen(6699,() =>{
  console.log('server is up');
});
