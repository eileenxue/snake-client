const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Show message upon successful connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    // Send my name
    conn.write("Name: EX❤️");
    // Move Commands
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100); 
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2000); 
  });

  // Display incoming data
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};