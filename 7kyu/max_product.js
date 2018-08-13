// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.



function adjacentElementsProduct(array) {
  // max product
  let largest;

  for (var i = 0; i < array.length; i++) {
    let temp = array[i] * array[i + 1];
    if (temp > largest || largest == undefined) {
      largest = temp;
    }
  }
  return largest;
}



console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //, 6)
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); //, -14)