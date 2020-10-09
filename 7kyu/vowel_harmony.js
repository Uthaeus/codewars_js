// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.


function dative(word) {
    let front = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    let back = ['a', 'á', 'o', 'ó', 'u', 'ú'];

    for (let x = word.length - 1; x >= 0; x--) {
        if (front.includes(word[x])) {
            return word + 'nek'; 
        } else if (back.includes(word[x])) {
            return word + 'nak';
        }
    }
    return word;
}


console.log(dative("ablak")); // "ablaknak"
console.log(dative("tükör")); //, "tükörnek"