// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.


function sumOfMinimums(arr) {
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        result.push(Math.min(...arr[x]));
    }
    return result.reduce((a, b) => a += b);
}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); //, 9