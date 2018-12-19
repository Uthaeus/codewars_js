// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.


function chooseBestSum(t, k, ls) {
    if (ls.length < k) {
        return null;
    }
    let sums = [];

    for (var x = 0; x < ls.length - 2; x++) {
        for (var i = x + 1; i < ls.length - 1; i++) {
            sums.push(ls[x] + ls[i] + ls[i + 1]);
        }
    }
    return sums;
}



var ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts)); //, 163