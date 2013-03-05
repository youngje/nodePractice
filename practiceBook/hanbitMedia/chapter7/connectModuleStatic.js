var connect = require('connect');

connect.createServer(
	connect.static(__dirname + "/resources"),
	function (request, response) {
		response.writeHead(200, {'Content-Type' : 'Text/html'});
		response.end('<img src = "/nodejs.png" width = "50%" />');
	}
).listen(9000, function () {
	console.log("Server Running at http://127.0.0.1:9000");
});