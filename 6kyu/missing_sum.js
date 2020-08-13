// In this Kata, we will calculate the minumum number that is not a possible sum from a list of integers.


function solve(arr) {
    let all = arr.sort();

    for (let x = 0; x < arr.length - 1; x++) {
      let tempSum;
      for (let y = x + 1; y < arr.length; y++) {
        tempSum = arr[x] + arr[y]
        console.log(tempSum);
      }
      tempSum = arr[x] + arr[x + 1];
      console.log(tempSum);
    }
}


console.log(solve([4,2,12,3,1])) //,11)