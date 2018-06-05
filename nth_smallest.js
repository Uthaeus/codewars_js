// Given a list of integers, return the nth smallest integer in the list. Only distinct elements should be considered when calculating the answer. n will always be positive (n > 0)

function nthSmallest(arr, n) {
  // your code
  // var unique = arr.filter((v, i, a) => a.indexOf(v) === i);
  // var sorted = unique.sort();
  // var nth = sorted[n - 1];
  // if (nth == undefined) {
  //   return null;
  // }
  // return nth;

  var sorted = arr.sort(function(a, b) {
    return a - b;
  });

  return sorted[n - 1];
}



// let a = [455555, 2222222, 3333333, 9879799, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979, 79977979];

// console.log(nthSmallest(a, 3)) //, 3333333)
// console.log(nthSmallest(a, 6)) //, null)



console.log(nthSmallest([15,20,7,10,4,3],3)) //,7)