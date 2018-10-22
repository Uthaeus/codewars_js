// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    let exes = str.split('').filter(i => i == 'x' || i == 'X');
    let ohs = str.split('').filter(i => i == 'o' || i == 'O');
    return exes.length == ohs.length;
}



console.log(XO("xxxm")); //,false)