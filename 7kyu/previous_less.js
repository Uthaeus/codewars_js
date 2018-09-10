// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.


function arrayPreviousLess(arr) {
  //coding and coding...
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    let temp = arr[i];
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        result.push(arr[j]);
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(-1);
    }
  }
  return result;
}



console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]))
//,[-1, -1, -1, 1, 3, 4, 4, 1])