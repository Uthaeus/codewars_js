// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.


function solve(s){
    let longest = 0;
    let vowels = 'aeiou';

    for (let x = 0; x < s.length; x++) {
        let tempLength = 0;

        while (vowels.includes(s[x])) {
            tempLength++
            x++
        }
        if (tempLength > longest) {
            longest = tempLength;
        }
    }
    return longest;
}


console.log(solve("ultrarevolutionariees")); //,3)
console.log(solve("iiihoovaeaaaoougjyaw")); //,8)