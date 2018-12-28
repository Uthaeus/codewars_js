// Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages will be in lowercase.


function mirror(code, cipher = null){
    let ciph = cipher === null ? 'abcdefghijklmnopqrstuvwxyz' : cipher;
    let result = "";

    for (var x = 0; x < code.length; x++) {
        let temp = code[x].toLowerCase();
        if (ciph.includes(temp)) {
            let ind = ciph.indexOf(temp);
            temp = ciph[(ciph.length - 1) - ind];
        }
        result += temp;
    }
    return result;
}



console.log(mirror("Welcome home", "w")); //, "welcome home")
console.log(mirror("gsrh rh z hvxivg")); //, "this is a secret")
console.log(mirror("this is a secret", " *")); //, "this*is*a*secret")
console.log(mirror("goodbye", "")); //, "goodbye")