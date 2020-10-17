// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.


function listSquared(m, n) {
    let result = [];

    for (let x = m; x <= n; x++) {
        let tempArr = [];
        let tempNum;
        for (let y = 1; y <= x; y++) {
            tempNum = y;
            if (x % y == 0) {
                tempArr.push(y);
            }
        }
        let sqArr = tempArr.map(a => Math.pow(a, 2));
        let sqSum = sqArr.reduce((a, b) => a += b);
        let square = Math.sqrt(sqSum);
        if (square % 1 == 0) {
            result.push([tempNum, sqSum]);
        }
    }
    return result;
}


console.log(listSquared(1, 250)); //, [[1, 1], [42, 2500], [246, 84100]]
console.log(listSquared(250, 500)); //, [[287, 84100]]