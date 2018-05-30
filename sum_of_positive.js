// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: array may be empty, in this case return 0.


function positiveSum(arr) {
  let temp = [];
  if (arr.length == 0) {
    return 0;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      temp.push(arr[i]);
    }
  }
  if (temp.length == 0) {
    return 0;
  }
  let result = temp.reduce(function(a, b) {
    return a += b;
  });
  return result;
}


console.log(positiveSum([1,-2,3,4,5])) //,13))