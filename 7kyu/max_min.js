// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc


function solve(arr){
    let sorted = arr.sort((a, b) => b - a);
    let result = [];

    for (let x = 0; x <= arr.length / 2; x++) {
        let tempLength = sorted.length - 1;
        result.push(sorted[x]);
        if (result.length < sorted.length) {
            result.push(sorted[tempLength - x]);
        }
    }

    return result;
};


console.log(solve([15,11,10,7,12])); //,[15,7,12,10,11])