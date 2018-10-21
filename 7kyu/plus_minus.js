// Count how often sign changes in array.


function catchSignChange(arr) {
    let count = 0;
    let curr = arr[0] < 0 ? 'neg' : 'pos';

    for (let x = 1; x < arr.length; x++) {
        if (curr == 'neg') {
            if (arr[x] >= 0) {
                count++;
                curr = 'pos';
            }
        } else if (curr == 'pos') {
            if (arr[x] < 0) {
                count++;
                curr = 'neg';
            }
        }
    }
    return count;
}



console.log(catchSignChange([-47,84,-30,-11,-5,74,77])); //, 3)