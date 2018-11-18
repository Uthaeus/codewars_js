// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    string = string.toLowerCase();
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (var char in string) {
        if (alph.includes(string[char]) && !result.includes(string[char])) {
            result += string[char];
        }
    }
    return result.length == 26;
}



var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); //, true