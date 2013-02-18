var cow = "purple"; // just a random cow

var f = function (x) {
    var r = 0;
    cow = "glue";
    if (x > 3) {
        var cow = 1; // a local variable
        r = 7;
    }
    return r;
};

var z = f(2); // ...

//cow??