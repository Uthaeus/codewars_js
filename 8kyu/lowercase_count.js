// Your task is simply to count the total number of lowercase letters in a string.


function lowercaseCount(str){
    let result = str.match(/[a-z]/g)
    return result ? result.length : 0;
}


console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); //, 3
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); //, 0