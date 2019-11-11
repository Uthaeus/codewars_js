// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.


function decode  (code, n) {
    let letters = '_abcdefghijklmnopqrstuvwxyz';
    let nums = n.toString().split('').map(a => +a);
    let result = "", numIndex = 0;
    
    for (var x = 0; x < code.length; x++, numIndex++) {
        let letterIndex;
        if (numIndex >= nums.length) {
            numIndex = 0;
        }
        if (code[x] - nums[numIndex] < 1) {
            let temp = nums[numIndex] - code[x];
            letterIndex = 26 - temp;
        } else {
            letterIndex = code[x] - nums[numIndex];
        }
        result += letters[letterIndex];
    }
    return result;


}




console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // , "masterpiece")