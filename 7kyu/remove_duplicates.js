// remove the left-most duplicates from an int array and return the result


function solve(arr){
    let result = [];

    for (var x = arr.length - 1; x >= 0; x--) {
        if (!result.includes(arr[x])) {
            result.unshift(arr[x]);
        }
    }
    return result;
}



console.log(solve([1,1,4,5,1,2,1])); //,[4,5,2,1])
console.log(solve([1,2,1,2,1,1,3])); //,[2,1,3])