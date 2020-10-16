// Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W. If data of the wrong data type was sent as a parameter the function must throw an error (IllegalArgumentException in Groovy): "This program only works for text."


function removeBMW(str){
    if (allLetters(str)) {
        str = str.replace(/[bmw]/ig, '');
    } else {
        return "This program only works for text."
    }
    return str;
}

function allLetters(s) {
    let letters = /^[A-Za-z]+$/;
    if (s.match(letters)) {
        return true;
    } else {
        return false;
    }
}


console.log(removeBMW("blablahblah")); //, "lalahlah")
console.log(removeBMW("bmwvolvoBMW")); //, "volvo")