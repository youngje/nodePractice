var net = require('net')
  , sockets = [];

var server = net.createServer(function(socket) {
  sockets.push(socket);

  socket.on('data', function(data) {
    for (var i = 0; i< sockets.length; i++) {
      if(sockets[i] !== socket) {
        sockets[i].write(socket.remoteAddress + '´ÔÀÇ ¸»: ' + data);
      }
    }
  });

  socket.on('end', function() {
    var i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });
});

server.listen(8000);
console.log('TCP chating server is started..');
