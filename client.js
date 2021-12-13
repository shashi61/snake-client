const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", 
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (data) => {
   console.log("connected");
   setTimeout(()=>{
    console.log("you ded cuz you idled");
   }, 5000);
  })

  return conn;
};
module.exports = connect;