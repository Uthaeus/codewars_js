// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).


function narcissistic( value ) {
    // Code me
    let numArr = value.toString().split('').map(a => +a);
    if (numArr.length == 1) {
        return true;
    }
    let p = numArr.length;
    let powered = numArr.map(a => Math.pow(a, p));
    let total = powered.reduce((a, b) => a += b);
    return total === value;
}



console.log(narcissistic( 371 )); //, "371 is narcissistic")