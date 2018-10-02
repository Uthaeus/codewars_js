// You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).


function missingValues(arr) {
    let numObj = {};
    let x, y;
    for (let i = 0; i < arr.length; i++) {
        if (numObj[arr[i]]) {
            numObj[arr[i]] += 1;
        } else {
            numObj[arr[i]] = 1;
        }
    }
    for (let item in numObj) {
        if (numObj[item] === 1) {
            x = item;
        } else if (numObj[item] === 2) {
            y = item;
        }
    }
    return x * x * y;
}



console.log(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56])); //,12096)