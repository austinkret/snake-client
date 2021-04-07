const net = require('net');

/**
 * Establishes connection with the game server
 */
const connection = function() {

  const connection = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  connection.setEncoding('utf8');

  connection.on('data', (message) => {
    console.log(message);
  });

  return connection;
};

console.log('Connecting ...');

module.exports = {
  connection
};