// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).




var findDigit = function(num, nth){
    if (nth <= 0) return -1;
    let result;
    if (num < 0) num = num * -1;
    let numArr = num.toString().split('');
    if (nth > numArr.length) {
        result = 0;
    } else {
        result = +numArr[numArr.length - nth];
    }
    return result;
}


console.log(findDigit(-2825, 3)); //, 8