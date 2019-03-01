// Call
// MDN : The call() method calls a function with a given this value and arguments provided individually.
/*
var obj = { num: 3 };

var addToThis = function(a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 2));
*/

// Apply
// MDN : The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
/*
var obj = { num: 3 };
var arr = [1, 2, 3];

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

console.log(addToThis.apply(obj, arr));
*/

// Bind
// MDN : The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// var obj = { num: 2 };

// var addToThis = function(a, b, c) {
//   return this.num + a + b + c;
// };

// var bound = addToThis.bind(obj);

// console.log(bound(1, 2, 3));
