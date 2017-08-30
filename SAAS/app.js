const fileController = require('./fileController');
fileController.readFile('test.txt',(data) => {
  console.log(data);
});

// console.log(`Day la ${result}`);
console.log('Hello World');
