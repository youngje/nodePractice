var net = require('net');

var server = net.createServer(function(socket) {
  console.log('connected to server...');
  socket.on('end', function() {
    console.log(' connection terminated');
  });

  socket.write('Hello\r\n');
});

server.listen(8124, function() {
  console.log('The server is connected to %d port', server.address().port);
});
