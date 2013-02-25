var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  //��Ŀ ����
  for(var i=0; i < numCPUs; i++) {
    cluster.fork();
  }


  cluster.on('death', function(worker) {
    ocnsole.log('worker ' + worker.pid + ' died');
  });
} else {
  // ��Ŀ ���μ����� HTTP������ �����Ѵ�. 
  http.Server(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}

