// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
//(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)


function sumArray(array) {
  array.sort((a, b) => a - b);
  array.pop()
  array.shift();
  return array.reduce((a, b) => a += b);
}



console.log(sumArray([ 6, 2, 1, 8, 10 ])) //, 16)