const { connection } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ... ")
connection();

setupInput();

