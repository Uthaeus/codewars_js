// Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).


function leastLarger(a,i) {
    let currentI = -1;
    let currentV = false;

    for (let x = i; x < a.length; x++) {
        if (a[x] > a[i] && currentV) {
            if (a[x] < currentV) {
                currentV = a[x];
                currentI = x;
            } 
        } else if (a[x] > a[i]) {
            currentV = a[x];
            currentI = x;
        }
    }
    return currentI;
}


console.log(leastLarger( [1, 3, 5, 2, 4], 0 )); //, 3)
console.log(leastLarger( [4, 1, 3, 5, 6], 4 )); //, -1)