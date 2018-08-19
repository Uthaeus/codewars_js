// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1.


function peak(arr){
 //..
 for (var i = 0; i < arr.length; i++) {
  let first = arr.slice(0, i);
  let second = arr.slice(i + 1);
  if (first.length > 1) {
    first = first.reduce((a, b) => a += b);
  } else {
    first = first[0];
  }
  if (second.length > 1) {
    second = second.reduce((a, b) => a += b);
  } else {
    second = second[0];
  }
  
  if (first == second) {
    return i;
  }
 }
 return -1;
}



console.log(peak([1,12,3,3,6,3,1])); //,2)
console.log(peak([10,20,30,40])) //,-1))