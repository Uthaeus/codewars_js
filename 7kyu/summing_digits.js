// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:


function sumDigits(number) {
    return number.toString().match(/[0-9]/g).map(a => +a).reduce((a, b) => a += b);
}


console.log(sumDigits(99)); //, 18)
console.log(sumDigits(-32)); //, 5)