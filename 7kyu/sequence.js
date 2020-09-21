// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series


function sumOfN(n) {
    let result = [];
    let len = n < 0 ? (n * -1) + 1 : n + 1;
    
    for (let x = 0; x < len; x++) {
        let temp = [];
        let y = 0;
        while (y <= x) {
            temp.push(y);
            y++;
        }
        let tempX = temp.reduce((a, b) => a += b);
        if (n < 0 && tempX != 0) {
            tempX = tempX * -1;
        }
        result.push(tempX);
    }
    return result;
};


console.log(sumOfN(-4)); //, [0, -1, -3, -6, -10])