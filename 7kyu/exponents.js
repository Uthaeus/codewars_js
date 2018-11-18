// Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second


function power(base, exponent){
    let neg = false, result = 1;
    if (exponent < 0) {
        neg = true;
        exponent *= -1;
    }

    for (var i = 0; i < exponent; i++) {
        result *= base;
    }

    if (neg) {
        return (1 / result);
    } else {
        return result;
    }
}



console.log(power(4, -2)); //, 0.0625)
console.log(power(2, 3)); //, 8)