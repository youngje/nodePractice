var connect = require("connect");
var server = connect.createServer();

server.use(connect.logger());

server.use(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end("<h1>connect use</h1>");
});

server.use(connect.errorHandler({
	stack : false,
	message : true,
	dump : false,
}));

server.listen(9000, function () {
	console.log("Server running at http://localhost:9000");
});