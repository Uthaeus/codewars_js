// In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.


function solve(arr){
    let largest = NaN;
    let temp = [];

    for (let x = arr.length - 1; x >= 0; x--) {
      for (let y = arr[x].length - 1; y >= 0; y--)
    }
}


console.log(solve([[1, 2],[3, 4]])); //,8)