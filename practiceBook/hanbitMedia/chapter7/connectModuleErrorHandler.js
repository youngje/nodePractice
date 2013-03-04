var connect = require("connect");

connect.createServer(function (request, response) {
	throw new Error("Page not Found!!!!!!!!!!!!");
}, connect.errorHandler({
	stack: false,
	message: true,
	dump: true
})). listen(9000, function () {
	console.log("Server running at http://localhost:9000");
});