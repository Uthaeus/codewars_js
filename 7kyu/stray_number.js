// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.


function stray(numbers) {
    let obj = {};

    for (let x = 0; x < numbers.length; x++) {
        if (obj[numbers[x]]) {
            obj[numbers[x]]++;
        } else {
            obj[numbers[x]] = 1;
        }
    }

    for (num in obj) {
        if (obj[num] == 1) {
            return +num;
        }
    }
}


console.log(stray([1, 1, 2])); //, 2