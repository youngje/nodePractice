var connect = require("connect");

connect.createServer(function (request, response, next1) {
	console.log("The first function");
	next1();
}, function (request, response, next) {
	console.log("The second function");
	next();
}, function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html"});
	response.end("<h1>Hello Connect Module .. ! </h1>");
}).listen(9000, function() {
	console.log("Server running at http://localhost:9000");
});

