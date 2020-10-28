// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.


function isDigit(s) {
    
    let temp = Number.parseFloat(s);
    let temp2 = +s;
    return temp == temp2;
}


console.log(isDigit('s2324')); //, false
console.log(isDigit('-234.4')); //, true
console.log(isDigit('3-4')); //, true