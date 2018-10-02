// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.


function sumTriangularNumbers(n) {
    let numArr = [];
    if (n < 0) {
        return 0;
    }
    for (let x = 1, i = 1; i <= n; i++, x += i) {
        numArr.push(x);
    }
    return numArr.reduce((a, b) => a += b);
}



console.log(sumTriangularNumbers(34)); //, 7140)
console.log(sumTriangularNumbers(6)); //, 56)