// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.


function keepOrder(ary, val) {
  // your code here
  var result = undefined;
  var x = 0;

  if (ary.length < 1) {
    return 0;
  }

  while (result == undefined) {
    if (ary[x] >= val) {
      result = x;
      
    } else if (x == ary.length - 1) {
      result = x + 1;
      
    }
    x++;
  }
  return result;
}



console.log(keepOrder([1, 1, 2, 2, 2], 2)) //, 2))
console.log(keepOrder([1, 2, 3, 4], -1)) //, 0))
console.log(keepOrder([1, 2, 3, 4], 5)) //, 4))