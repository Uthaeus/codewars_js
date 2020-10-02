// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.


function validatePIN (pin) {
    // if (pin.length == 4 || pin.length == 6) {
    //     for (let x = 0; x < pin.length; x++) {
    //         if (pin.charCodeAt(x) < 48 || pin.charCodeAt(x) > 57) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // return false;

    
}


console.log(validatePIN("123")); //,false)
console.log(validatePIN("1111")); //,true)