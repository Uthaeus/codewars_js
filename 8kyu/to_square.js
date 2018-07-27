// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:


function squareOrSquareRoot(array) {
  let resultArr = [];

  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.pow(array[i], 0.5))) {
      resultArr.push(Math.pow(array[i], 0.5));
    } else {
      resultArr.push(Math.pow(array[i], 2));
    }
  }  
  return resultArr;
}



var input = [ 4, 3, 9, 7, 2, 1 ];
var expected = [ 2, 9, 3, 49, 4, 1 ];

console.log(squareOrSquareRoot(input)) //, expected)