// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


function findLongest(array){
    let ind = 0;
    let longest = 0;

    for (let x = 0; x < array.length; x++) {
        let tempLength = array[x].toString().length;
        if (tempLength > longest) {
            longest = tempLength;
            ind = x;
        }
    }
    return array[ind];
}


console.log(findLongest([8, 900, 500])); //, 900)