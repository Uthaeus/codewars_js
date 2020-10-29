// When provided with a letter, return its position in the alphabet


function position(letter){
    let pos = letter.charCodeAt(0) - 96;
    return `Position of alphabet: ${pos}`;
}


console.log(position("z")); //,"Position of alphabet: 26"