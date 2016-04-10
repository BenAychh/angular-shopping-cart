var server = require('node-http-server');
console.log(__dirname + '/src');
server.deploy(
  {
    port:process.env.PORT || 8080,
    root:__dirname + '/src',
  }
);
