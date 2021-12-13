const net = require("net");
const {IP, PORT} = ("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
   console.log("Successfully connected to the game server.");
   conn.write("Name: SBS");
//    conn.write("Move: up");
//    conn.write("Move: left");
//    conn.write("Move: down");
//    conn.write("Move: right");

   setTimeout(()=>{
    console.log("you ded cuz you idled");
   }, 5000);
  })

  return conn;
};
module.exports = connect;