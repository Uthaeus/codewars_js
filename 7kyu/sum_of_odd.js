// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.


function cubeOdd(arr) {
    let cubes = [];
    for (let x = 0; x < arr.length; x++) {
        if (isNaN(arr[x])) return undefined;
        if (arr[x] % 2 != 0) {
            cubes.push(Math.pow(arr[x], 3));
        }
    }
    return cubes.reduce((a, b) => a += b);
}


console.log(cubeOdd([1, 2, 3, 4])); //, 28