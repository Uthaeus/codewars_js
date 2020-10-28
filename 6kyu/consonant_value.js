// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".


function solve(s) {
    let result = [];
    let temp = s.replace(/[aeiou]/g, ' ').split(' ');
    for (let x = 0; x < temp.length; x++) {
        let count = 0;
        for (let y = 0; y < temp[x].length; y++) {
            count += temp[x].charCodeAt(y) - 96;
        }
        result.push(count);
    }
    return Math.max(...result);
};


console.log(solve("chruschtschov")); //,80
console.log(solve("twelfthstreet")); //,103