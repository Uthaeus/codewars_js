// Create a function that takes a list of one or more non-negative integers, and arranges them such that they form the largest possible number


const largestArrangement = array => {
    let result = [];

    for (var x = 0; x < array.length; x++) {
        let temp = array[x].toString().split('').map(a => +a);
        result.push(temp);
    }
    result = result.sort((a, b) => b[0] - a[0]);
    for (var i = 0; i < result.length; i++) {
        result[i] = result[i].join('');
    }
    return +result.join('');
}



console.log(largestArrangement([8, 6, 590, 70])); //, 8706590)