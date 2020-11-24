// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded)


function binaryToString(binary) {
    let result = '';
    for (let x = 0; x < binary.length; x += 8) {
        let temp = binary.slice(x, x + 8);
        temp = parseInt(temp, 2);
        result += String.fromCharCode(temp);
    }
    return result;
}


console.log(binaryToString('01001011010101000100100001011000010000100101100101000101')); //, 'KTHXBYE'
console.log(binaryToString('00110001001100000011000100110001')); //, '1011'