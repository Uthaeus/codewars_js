// you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.


var lengthOfSequence = function (arr, n) {
    let nums = 0, len = 0;

    for (let x = 0; x < arr.length; x++) {
      if (arr[x] == n) {
        nums++;
      }
      if (nums >= 1 && nums <= 2) {
        len++;
      }
    }
    return nums > 2 || nums < 1 ? 0 : len;
};



console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)); //, 5)