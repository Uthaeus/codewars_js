// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.


function lowestProduct(input) {
    let result, min = Infinity;

    if (input.length < 4 || +input < 0) {
        return 'Number is too small';
    }

    for (var x = 0; x < input.length - 3; x++) {
        let temp = input.slice(x, x + 4).split('').map(a => +a).reduce((a, b) => a *= b);
        if (temp < min) {
            min = temp;
        }
    }
    return min;
}



console.log(lowestProduct("2345611117899")); //,1)