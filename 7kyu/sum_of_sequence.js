// Your task is to make function, which returns the sum of a sequence of integers.


const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    let result = [];

    for (let x = begin; x <= end; x += step) {
        result.push(x);
    }
    return result.reduce((a, b) => a += b);
};


console.log(sequenceSum(1, 5, 1)); //, 15