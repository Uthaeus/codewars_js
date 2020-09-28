// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.


function validatePIN (pin) {
    let pinArr = pin.split('');
    if (pinArr.every(a => +a)) {
        return pin.length == 4 || pin.length == 6;
    } else {
        return false;
    }
}


console.log(validatePIN("123")); //,false)
console.log(validatePIN("1111")); //,true)