var connect = require("connect");

connect.createServer(connect.logger(':method  :response-time ms  status :status'), function (request, response, next) {
	response.writeHead(200, {'Content-Type': 'Text/html'});
	response.end('<h1>Hello Connect Module</h1>');
}). listen(9000, function () {
	console.log("Server running at http://localhost:9000");
});