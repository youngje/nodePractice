//side effect

// A few variables, hanging around
var cow, x;
cow = "sleepy";

// A simple function that doubles its argument
var double = function (a) {
    cow = "purple";
    return a * 2;
};

x = double(6);
// What is cow now?


===========
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
===========
//function scope

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
===========

var cow = "purple"; // just a random cow

var f = function (x) {
    var r = 0;
    cow = "glue";
    if (x > 3) {
        r = 7;
    }
    return r;
};

var z = f(2); // poor cow

============
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

============

function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init(); 


============
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
 
var add5 = makeAdder(5);
var add10 = makeAdder(10);
 
print(add5(2));  // 7
print(add10(2)); // 12

=============

var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();
 
alert(Counter.value()); /* 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* 2 */
Counter.decrement();
alert(Counter.value()); /* 1 */

=================

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};
 
var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* 2 */
Counter1.decrement();
alert(Counter1.value()); /* 1 */
alert(Counter2.value()); /* 0 */



================

** inex.html

<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>


--


function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}
 
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];
 
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}
 
setupHelp(); 

===============

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}
 
function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}
 
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];
 
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}
 
setupHelp(); 