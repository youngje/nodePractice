var http = require("http");
var fs = require("fs");
var ejs = require("ejs");


http.createServer(function (request, response) {
	fs.readFile('EJSPage.ejs', 'utf8', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'text/html'});
		response.end(ejs.render(data, {
			name: 'Measuring Square',
			description: 'Hello EJS With Node.js .. !'
		}));
	});
}).listen(9000, function () {
	console.log('Server Running at http://127.0.0.1:9000');
});
