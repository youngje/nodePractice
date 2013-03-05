var connect = require('connect');

connect.createServer(connect.router(function (app) {
	app.get('/Home/Index', function (request, response, next) {
		response.writeHead(200, {'Content-Type' : 'Text/html'});
		response.write('<h1>Index Page</h1>');
		response.end();
	});
	app.get('/Home/About', function (request, response, next) {
		response.writeHead(200, {'Content-Type' : 'Text/html'});
		response.write('<h1>About page</h1>');
		response.end();
	});
})).listen(9000, function () {
	console.log('server is running at http://localhost:9000');
});