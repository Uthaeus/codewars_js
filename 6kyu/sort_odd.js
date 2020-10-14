// You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.


function sortArray(array) {
    let odds = [];
    let oddCount = 0;

    for (let x = 0; x < array.length; x++) {
        if (array[x] % 2 != 0) {
            odds.push(array[x]);
            array[x] = 'A';
        }
    }
    odds = odds.sort((m, n) => m - n);

    for (let x = 0; x < array.length; x++) {
        if (array[x] == 'A') {
            array[x] = odds[oddCount];
            oddCount++;
        }
    }
    return array;
}


console.log(sortArray([5, 3, 2, 8, 1, 4])); //, [1, 3, 2, 8, 5, 4]
console.log(sortArray([]));