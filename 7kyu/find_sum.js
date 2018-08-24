// Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...


function diagonalSum(matrix){
  //...
  let result = [];

  for (var i = 0; i < matrix.length; i++) {
    result.push(matrix[i][i]);
  }

  return result.reduce((a, b) => a += b);
}



console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //, 15)