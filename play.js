const connect = require('./client');
const stdin = process.stdin;

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
  
};

const handleUserInput = function () {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

