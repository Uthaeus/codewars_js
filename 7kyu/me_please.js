// Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"


function sayMeOperations(str) {
    let arr = str.split(' ');
    let result = [];
    
    for (let x = 0; x < arr.length - 2; x++) {
        if (+arr[x] + +arr[x + 1] == +arr[x + 2]) {
            result.push('addition');
        } else if (+arr[x] - +arr[x + 1] == +arr[x + 2]) {
            result.push('subtraction');
        } else if (+arr[x] * +arr[x + 1] == +arr[x + 2]) {
            result.push('multiplication');
        } else {
            result.push('division');
        }
    }
    return result.join(', ');
}


console.log(sayMeOperations("1 2 3 5 8")); //, "addition, addition, addition")

console.log(sayMeOperations("10 2 5 -3 -15 12")); // "division, subtraction, multiplication, subtraction"