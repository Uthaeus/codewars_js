// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


var capitals = function (word) {
    let result = [];
    for (let x = 0; x < word.length; x++) {
        if (word[x] == word[x].toUpperCase()) {
            result.push(x);
        }
    }
    return result;
};


console.log(capitals('CodEWaRs')); //, [0,3,4,6])