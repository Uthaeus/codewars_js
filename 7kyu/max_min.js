// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc


function solve(arr){
    let sorted = arr.sort((a, b) => a - b);

    return sorted;
};


console.log(solve([15,11,10,7,12])); //,[15,7,12,10,11])