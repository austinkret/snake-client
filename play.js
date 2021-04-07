const { connection } = require('./client');

connection();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  callback(stdin);
  return stdin;
};

//Callback for setupInput
const handleUserInput = function(data) {
  //event handler looking for the ctr + c input
  data.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

setupInput(handleUserInput);

