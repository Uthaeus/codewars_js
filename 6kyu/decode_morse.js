// That's right: your job is to implement a decoder for the Morse alphabet. Rather than dealing with actual beeps, we will use a common string encoding of Morse. A long beep is represened by a dash (-) and a short beep by a dot (.). A series of long and short beeps make up a letter, and letters are separated by spaces ( ). Words are separated by double spaces.


function decode(str) {
    let result = '';
    let strArr = str.split(' ');
    let codes = { 'a': '.-', 'h': '....', 'o': '---', 'u': '..-', '1': '.----', '6': '-....', 'b': '-...', 'i': '..', 'p': '.--.', 'v': '...-', '2': '..---', '7': '--...', 'c': '-.-.', 'j': '.---', 'q': '--.-', 'w': '.--', '3': '...--', '8': '---..', 'd': '-..', 'k': '-.-', 'r': '.-.', 'x': '-..-', '4': '....-', '9': '----.', 'e': '.', 'l': '.-..', 's': '...', 'y': '-.--', '5': '.....', '0': '-----', 'f': '..-.', 'm': '--', 't': '-', 'z': '--..', 'g': '--.', 'n': '-.' };

    let a = Object.keys(codes);
    let b = Object.values(codes);

    for (let x = 0; x < strArr.length; x++) {
        if (b.includes(strArr[x])) {
            let ind = b.indexOf(strArr[x]);
            result += a[ind];
        } else if (strArr[x] == '') {
            result += ' ';
        }
    }
    return result;
}



console.log(decode(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")); //, "hello world")