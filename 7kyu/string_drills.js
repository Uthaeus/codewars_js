// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times. For example:


function repeater(string, n){
    //Your code goes here.
    let output = '';
    for (let x = 0; x < n; x++) {
        output += string;
    }
    return output;
}



console.log(repeater('Wub ', 6)); //, 'Wub Wub Wub Wub Wub Wub ')