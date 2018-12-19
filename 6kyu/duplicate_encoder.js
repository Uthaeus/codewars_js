// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    wordObj = {}, result = "";
    word = word.toLowerCase();

    for (var x = 0; x < word.length; x++) {
        if (wordObj[word[x]]) {
            wordObj[word[x]]++;
        } else {
            wordObj[word[x]] = 1;
        }
    }
    for (var x = 0; x < word.length; x++) {
        if (wordObj[word[x]] === 1) {
            result += '(';
        } else {
            result += ')';
        }
    }
    return result;
}



console.log(duplicateEncode("Success")); //, ")())())","should ignore case")
console.log(duplicateEncode("(( @")); // ,"))(("