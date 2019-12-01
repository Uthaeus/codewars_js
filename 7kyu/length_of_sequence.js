// you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.


var lengthOfSequence = function (arr, n) {
    let first = arr.indexOf(n);
    let second = arr.lastIndexOf(n) + 1;
    let diff = second - first;
    let nums = 0;

    for (let x = 0; x < arr.length; x++) {
      if (arr[x] == n) {
        nums++;
      }
    }

    return nums < 2 || nums > 2 ? 0 : diff;
};



console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)); //, 5)
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7)); //, 4)