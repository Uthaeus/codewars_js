// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.


// /**
//  * Returns product of all numbers in a numeric array.
//  * Returns null if param is null or array is empty.
//  * @param {Array} values - The array containing the items.
//  */
function product(values) {
    return values == null || values.length < 1 ? null : values.reduce((a, b) => a *= b);
}



console.log(product([0, 2, 9, 7])); //, 0)
console.log(product(null)); //, null)
console.log(product([])); //, null)