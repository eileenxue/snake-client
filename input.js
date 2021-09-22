const stdin = process.stdin;

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  // Handle user inputs
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left")
    }
    if (key === 's') {
      conn.write("Move: down")
    }
    if (key === 'd') {
      conn.write("Move: right")
    }
    if (key === 'u'){
      conn.write("Say: Winner Takes All");
    }
    if (key === 'i'){
      conn.write("Say: Nom nom nom ☕️");
    }
  };

   // Event listener for stdin
   stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};
