// The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


function firstNonConsecutive (arr) {
  let first = arr[0];
  for (var i = 0, x = first; i < arr.length; i++, x++) {
    console.log(arr[i], x);
    if (arr[i] != x) {
      return arr[i];
    }
  }
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8])); // 6