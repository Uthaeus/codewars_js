// Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.


function digitsAverage(input) {
    let numArr = input.toString().split('').map(a => +a);
    let result = [];

    if (numArr.length < 2) {
        return +numArr.join('');
    }
    for (var x = 0; x < numArr.length - 1; x++) {
        let temp = Math.round((numArr[x] + numArr[x + 1]) / 2)
        result.push(temp);
    }
    return result.length === 1 ? +result.join('') : digitsAverage(+result.join(''));
}



console.log(digitsAverage(89)); //, 9)
console.log(digitsAverage(2)); //, 2))
console.log(digitsAverage(245)); //, 4)