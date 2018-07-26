// In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.


function findMultiples(integer, limit) {
  //your code here
  let result = [];

  for (var i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}


console.log(findMultiples(5, 25)) //, [5, 10, 15, 20, 25])