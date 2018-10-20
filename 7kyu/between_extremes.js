// Given an array of numbers, return the difference between the largest and smallest values


function betweenExtremes(numbers) {
    let sorted = numbers.sort((a, b) => a - b);

    return Math.abs(sorted[0] - sorted[sorted.length - 1]);
}



console.log(betweenExtremes([-1, -41, -77, -100])); //, 99)