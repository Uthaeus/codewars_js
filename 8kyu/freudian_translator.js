// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).


function toFreud(string) {
    let arr = string.split(' ');
    let result = [];

    for (var x = 0; x < arr.length; x++) {
        result.push('sex');
    }
    return result.join(' ');
}



console.log(toFreud("This is a test")); //, "sex sex sex sex")