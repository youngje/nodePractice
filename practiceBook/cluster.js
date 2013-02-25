var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  //况目 积己
  for(var i=0; i < numCPUs; i++) {
    cluster.fork();
  }


  cluster.on('death', function(worker) {
    ocnsole.log('worker ' + worker.pid + ' died');
  });
} else {
  // 况目 橇肺技胶绰 HTTP辑滚甫 积己茄促. 
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}

