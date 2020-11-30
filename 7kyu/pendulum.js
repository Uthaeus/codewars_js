// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum


function pendulum(values) {
    let result = [];
    let sorted = values.sort((a, b) => a - b);

    for (let x = 0; x < sorted.length; x++) {
        if (x == 0) {
            result.push(sorted[0]);
        } else if (x % 2 != 0) {
            result.push(sorted[x]);
        } else {
            result.unshift(sorted[x]);
        }
    }
    return result;
}


console.log(pendulum([4,10,9])); //, [10,4,9]
console.log(pendulum([33,38,38,36,43,48,32,40,47,50,33])); //, [50,47,40,38,33,32,33,36,38,43,48]