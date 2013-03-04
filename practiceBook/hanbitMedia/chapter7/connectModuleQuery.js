var connect = require("connect");

connect.createServer(connect.query(), function (request, response, next) {
	response.writeHead(200, {'Content-Type': 'Text/html'});
	response.end('<h1>' + JSON.stringify(request.query) + '</h1>');
}). listen(9000, function () {
	console.log("Server running at http://localhost:9000");
});