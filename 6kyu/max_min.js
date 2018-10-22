// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array:


function maxAndMin(arr1,arr2){
    let large = null, small = null;
    let longArr, shortArr;

    if (arr1.length >= arr2.length) {
        longArr = [...arr1];
        shortArr = [...arr2];
    } else {
        longArr = [...arr2];
        shortArr = [...arr1];
    }

    for (var x = 0; x < longArr.length; x++) {
        for (var i = 0; i < shortArr.length; i++) {
            let temp = Math.abs(longArr[x] - shortArr[i]);
            if (large == null || temp > large) {
                large = temp;
            }
            if (small == null || temp < small) {
                small = temp;
            }
        }
    }
    return [large, small];
}



console.log(maxAndMin([3,10,5],[20,7,15,8])); // , [17,2])
console.log(maxAndMin([1,2,3,4,5],[6,7,8,9,10])); // , [9,1])