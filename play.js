const { connection } = require('./client');
const { setupInput } = require('./input');

setupInput(connection());

