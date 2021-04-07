const net = require('net');
const { IP, PORT } = require('./constants');

const name = "ABM";

/**
 * Establishes connection with the game server
 */
const connection = function() {

  const connection = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  connection.setEncoding('utf8');

  //you ded cuz you died
  connection.on('data', (message) => {
    console.log(message);
  });

  // prints once connected to the server
  connection.on('connect', () => {
    
    console.log("🍌 Connected to server 🍌");
    //Instruction to server to write name
    connection.write(`Name: ${name}`);

  });
  return connection;
};

console.log('Connecting ...');

module.exports = {
  connection
};