// Call
/*
var obj = { num: 3 };

var addToThis = function(a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 2));
*/

// Apply

var obj = { num: 3 };
var arr = [1, 2, 3];

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

console.log(addToThis.apply(obj, arr));
