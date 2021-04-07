let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

//Callback for setupInput
const handleUserInput = function(data) {
  //event handler looking for the ctr + c input
  data.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0077') {
      connection.write('Move: up');
      // console.log('key pressed');
      process.stdout.write(`up\n`);
    }
    if (key === '\u0061') {
      connection.write('Move: left');
      // console.log('key pressed');
      process.stdout.write(`left\n`);
    }
    if (key === '\u0073') {
      connection.write('Move: down');
      // console.log('key pressed');
      process.stdout.write(`down\n`);
    }
    if (key === '\u0064') {
      connection.write('Move: right');
      // console.log('key pressed');
      process.stdout.write(`right\n`);
    }
    if (key === '\u007A') {
      connection.write('Say: Nice One!');
    }
    if (key === '\u0078') {
      connection.write('Say: What a save!');
    }
    if (key === '\u0063') {
      connection.write('Say: My Bad!');
    }
    if (key === '\u0076') {
      connection.write('Say: Savage.');
    }
  });
};

module.exports = {
  setupInput
};