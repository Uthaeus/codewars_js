// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
    let result = "";

    for (let x = 0; x < message.length; x++) {
        let code = message.charCodeAt(x);
        if (code >= 97 && code <= 122) {
            code += 13;
            if (code > 122) {
                code -= 26;
            }
            result += String.fromCharCode(code);
        } else if (code >= 65 && code <= 90) {
            code += 13;
            if (code > 90) {
                code -= 26;
            }
            result += String.fromCharCode(code);
        } else {
            result += message[x];
        }
    }
    return result;
}



console.log(rot13('test')); // 'grfg'