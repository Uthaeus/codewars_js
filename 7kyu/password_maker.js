// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.


function makePassword(phrase) {
    let result = '';
    let arr = phrase.split(' ');

    for (let x = 0; x < arr.length; x++) {
        let pre = arr[x][0];
        if (pre.toLowerCase() == 'i') {
            pre = '1';
        } else if (pre.toLowerCase() == 'o') {
            pre = '0';
        } else if (pre.toLowerCase() == 's') {
            pre = '5';
        }
        result += pre;
    }
    return result;
}



console.log(makePassword("Give me liberty or give me death")); //, "Gml0gmd")