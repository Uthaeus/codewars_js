// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.


function isNarcissistic(n){
    let numArr = n.toString().split('').map(a => +a);
    let p = numArr.length;
    return numArr.map(a => Math.pow(a, p)).reduce((x, y) => x += y) == n;
}



console.log(isNarcissistic(435)); //, false)
console.log(isNarcissistic(1634)); //, true)