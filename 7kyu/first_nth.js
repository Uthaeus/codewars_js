// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// parseFloat(Math.round(num3 * 100) / 100).toFixed(2);


function SeriesSum(n) {
    let total = 1;
    if (n == 0) {
        return '0.00';
    }
    for (var x = 2; x <= n; x++) {
        let temp = (1 / (x * 2 + (x - 2)));
        total += temp;
    }
    return (Math.round(total * 100) / 100).toFixed(2);
}



console.log(SeriesSum(4)); //, "1.49")
console.log(SeriesSum(3)); //, "1.39")
console.log(SeriesSum(5)); //, "1.57")