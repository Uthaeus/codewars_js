// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.


function matrixAddition(a, b){
    let result = [];

    for (var x = 0; x < a.length; x++) {
        let temp = [];
        for (var i = 0; i < a[x].length; i++) {
            temp.push(a[x][i] + b[x][i]);
        }
        result.push(temp);
    }
    return result;
}



console.log(matrixAddition([ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
    [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ]));
    // [ [3, 4, 4],
    // [6, 4, 4],
    // [2, 2, 4] ]