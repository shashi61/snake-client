const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    setupInput.on("data", (key)=>handleUserInput(key))
    return stdin;
  };
  const handleUserInput = function () {
    if (key === '\u0003') {
      process.exit();
  }
  }
  module.exports = setupInput;