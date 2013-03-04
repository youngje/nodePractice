var connect = require("connect");

connect.createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html"});
	response.end("<h1>Hello Connect Module .. ! </h1>");
}).listen(9000, function() {
	console.log("Server running at http://localhost:9000");
});

