// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  let total = 0;

  for (var i = 0; i < x.length; i++) {
    total += +x[i];
  }
  return total;
}


console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) //, 42)