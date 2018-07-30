// Given an array (or list or vector) of arrays (or, guess what, lists or vectors) of integers, your goal is to return the sum of a specific set of numbers, starting with elements whose position is equal to the main array length and going down by one at each step.


function elementsSum(arr, d = 0){
  //your code here
  let result = 0;
  for (var i = arr.length - 1, x = 0; i >= 0; i--, x++) {
    if (arr[x][i] == undefined) {
      result += d;
    } else {
      result += arr[x][i];
    }
  }
  return result;
}



console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5)) //, 12)
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]])) //, 15)
console.log(elementsSum([[3, 2], [4], []])) //, 0)