// Write a function that produces an array with the numbers 0 to N-1 in it.


const arr = N => {
    let result = [];
    for (let x = 0; x < N; x++) {
        result.push(x);
    }
    return result;
}


console.log(arr(4)); //, [0,1,2,3]