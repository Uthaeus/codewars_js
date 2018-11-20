// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.


function upArray(arr){
    if (arr.some(a => a < 0)) {
        return null;
    } 
    
}



console.log(upArray([4,3,2,5])); //, [4,3,2,6])
console.log(upArray([1,-9])); //, null))
console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ]));
// [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]