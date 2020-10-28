// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.


function index(array, n){
    if (n > array.length - 1) return -1;
    return Math.pow(array[n], n);
}


console.log(index([1,1,1,1,1,1,1,1,1,2], 9)); //,512
console.log(index([29,82,45,10], 3)); //,1000