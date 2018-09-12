// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.


function houseNumbersSum(inputArray) {
  //coding and coding..
  let count = 0;
  for (num in inputArray) {
    if (inputArray[num] === 0) {
      break;
    } else {
      count += inputArray[num];
    }
  }
  return count;
}



console.log(houseNumbersSum([4, 2, 1, 6, 0])); //,13)
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])) //,10)