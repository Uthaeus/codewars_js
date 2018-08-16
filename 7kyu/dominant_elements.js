// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements


function solve(arr){
//..
  let result = [arr[arr.length - 1]];
  let max = result[0];

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      result.unshift(arr[i]);
    }
  }
  return result;
};



console.log(solve([ 92,52,93,31,89,87,77,105])); //,[105])
console.log(solve([ 67,54,27,85,66,88,31,24,49])); //,[88,49])