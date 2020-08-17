// Create a function that calculates the individual results of each step, not including the original number, but including the single digit, and outputs the result as a list/array. If the input is a single digit, return an empty list/array.


function per(n) {
    if (n < 10) return [];
    let results = [];

    while (n >= 10) {
        let arr = String(n).split('').map(a => +a);
        n = arr.reduce((a, b) => a *= b);

        results.push(n)
    }
    return results;
}


console.log(per(69)); //, [54, 20, 0])
console.log(per(1)); //, [])