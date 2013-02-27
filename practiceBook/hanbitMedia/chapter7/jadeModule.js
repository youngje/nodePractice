var http = require("http");
var fs = require("fs");
var jade = require("jade");


http.createServer(function (request, response) {
	fs.readFile('JadePage.jade', 'utf8', function (error, data) {
		var fn = jade.compile(data);

		response.writeHead(200, { 'Content-Type' : 'text/html'});
		response.end(fn({
				name: "Hello HAML & Jade",
				description: "Youngje Yun at NodeStudy"
			}));
	});
}).listen(9000, function () {
	console.log('Server Running at http://127.0.0.1:9000');
});
