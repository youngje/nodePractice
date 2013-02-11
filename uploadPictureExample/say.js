function say(word) {
	console.log(word);
}

function executive( someFunction, value) {
	someFunction(value);
}

executive(say, "hello");

executive( function(word){ console.log(word)}, "hello!!");

