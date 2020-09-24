// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.


function repeats(arr){
    let dict = {}, result = [];

    for (let x = 0; x < arr.length; x++) {
        if (dict[arr[x]]) {
            dict[arr[x]]++;
        } else {
            dict[arr[x]] = 1;
        }
    }
    
    for (num in dict) {
        if (dict[num] == 1) {
            result.push(+num);
        }
    }
    return result.reduce((a, b) => a += b);
};


console.log(repeats([4,5,7,5,4,8])); //,15)