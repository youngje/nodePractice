var complicated = function (x) {
    var f = function (y) {
        return y * 3 + 1;
    };
    return f(f(x));
};
var y = complicated(2);
// Now y is 22

============
var complicated = function (x) {
    var c, f;
    c = 1; //constant
    f = function (y) {
    	// we can refer c in here
        return y * 3 + c;
    };
    return f(f(x));
};
var y = complicated(2);
// Now y is 22