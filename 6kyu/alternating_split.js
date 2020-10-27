// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.


function encrypt(text, n) {
    for (let x = 0; x < n; x++) {
        let pre = '', post = '';
        for (let y = 0; y < text.length; y++) {
            if (y % 2 == 0) {
                post += text[y];
            } else {
                pre += text[y];
            }
        }
        text = pre + post;
    }
    return text;
}

function decrypt(encryptedText, n) {
    for (let x = 0; x < n; x++) {
        let result = '';
        let pre = encryptedText.slice(Math.floor(encryptedText.length / 2), encryptedText.length);
        let post = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
        for (let y = 0; y < encryptedText.length / 2; y++) {
            result += pre[y];
            if (post[y]) {
                result += post[y];
            }
        }
        encryptedText = result;
    }
    return encryptedText;
}


console.log(encrypt("This is a test!", 3)); //, " Tah itse sits!"

console.log(decrypt("hsi  etTi sats!", 1)); //, "This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //, "This kata is very interesting!"