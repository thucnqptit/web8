const express = require('express');
const fileController = require('./fileController');
let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});
app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/public/about.html');
});
app.get('/file', (req, res) => {
	res.sendFile(__dirname + '/public/file.html');
  var options = {
    host: 'localhost',
    port: 6969,
    path: '/public/img/img.png',
    method: 'GET'
  };
  // fileController.readImg(options);
  var filename = 'public/text.txt';
  fileController.readFile(filename,(data) => {
    // writeToDocument(data);
  });
});
app.listen(6969, () => {
	console.log('Magical in port 6969 =))');
});
