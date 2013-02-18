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
