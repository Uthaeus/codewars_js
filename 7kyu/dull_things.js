// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.


function removeSmallest(numbers) {
    let smallest = Math.min(...numbers);
    let myArr = [...numbers];
    let ind = numbers.indexOf(smallest);
    myArr.splice(ind, 1);
    return myArr;
}


console.log(removeSmallest([2, 2, 1, 2, 1])); //, [2, 2, 2, 1]