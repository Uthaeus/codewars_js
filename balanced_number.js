// Definition
// Balanced number is the number that The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal.

// Task
// Given a number, Find if it is Balanced or not .


function balancedNum(number) {
  var numStr = number.toString();
  var first, last;
  if (numStr.length <= 2) {
    return "Balanced";
  }
  if (numStr.length % 2 == 0) {
    first = numStr.slice(0, (numStr.length / 2) - 1);
    last = numStr.slice((numStr.length / 2) + 1, numStr.length);
  } else {
    first = numStr.slice(0, Math.floor(numStr.length / 2));
    last = numStr.slice(Math.ceil(numStr.length / 2), numStr.length);
  }
  var f = first.split('').map(function(a) {
    return +a;
  }).reduce(function(a, b) {
    return a += b;
  });
  var l = last.split('').map(function(a) {
    return +a;
  }).reduce(function(a, b) {
    return a += b;
  });
  return f == l ? "Balanced" : "Not Balanced";
}



console.log(balancedNum(56239814)) //, "Balanced"))
console.log(balancedNum(1230987)) //, "Not Balanced"))