function diffArray(arr1, arr2) {
  let result = [];
  let long, short;

  if (arr1.length < arr2.length) {
    long = arr2;
    short = arr1;
  } else {
    long = arr1;
    short = arr2;
  }
  for (var i = 0; i < long.length; i++) {
    if (!short.includes(long[i])) {
      result.push(long[i]);
    }
  }
  return result;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));