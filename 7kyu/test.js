function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var front = arr2.slice(0, n);
  var back = arr2.slice(n, arr2.length);
  let result = [...front, ...arr1, ...back];

  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));