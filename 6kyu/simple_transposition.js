// Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.


function simpleTransposition(text) {
    let first = '', second = '';

    for (let x = 0; x < text.length; x++) {
        if (x % 2 == 0) {
            first += text[x];
        } else {
            second += text[x];
        }
    }
    return first + second;
}



console.log(simpleTransposition("Sample text")); //, "Sml etapetx")
console.log(simpleTransposition("All that glitters is not gold")); //, "Alta ltesi o odl htgitr sntgl")