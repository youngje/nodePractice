//returning function

var makeFunction = function () {
    var addOne = function (x) {
        return x + 1;
    };
    return addOne; // return the function
};
// makeFunction is a function with no arguments

var f = makeFunction();
// f is a function that takes one argument

var y = f(3);
// now y is 4

/*Remember there's a difference between a function and a function applied to its arguments. 
It's the difference between f and f(x). If a function doesn't take any arguments there is still a difference. 
makeFunction is a function that takes no arguments, makeFunction() is the result of calling that function. 
Which is itself another function...
*/