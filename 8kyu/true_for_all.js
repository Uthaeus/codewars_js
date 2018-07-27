// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.


function all( arr, fun ){
  // ...
  let myArr = arr.filter(fun);
  return myArr.length == arr.length;
}



console.log(all([1,2,3,4,5], function(v){return v<9})) //, true)
console.log(all([1,2,3,4,5], function(v){return v>9})) //, false)