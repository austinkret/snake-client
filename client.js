const net = require('net');

const name = "ABM";

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

  //you ded cuz you died
  connection.on('data', (message) => {
    console.log(message);
  });

  // prints once connected to the server
  connection.on('connect', () => {
    
    console.log("🍌 Connected to server 🍌");
    //Instruction to server to write name
    connection.write(`Name: ${name}`);

    

    // setTimeout(()=>{
    //   connection.write(`Move: up`);
    // }, 500);

    // setTimeout(()=>{
    //   connection.write(`Move: left`);
    // }, 1000);

    // setInterval(()=>{
    //   connection.write(`Move: down`);
    // }, 1500);

    // setTimeout(()=>{
    //   connection.write(`Move: right`);
    // }, 200);


  });

  

  return connection;
};

console.log('Connecting ...');

module.exports = {
  connection
};