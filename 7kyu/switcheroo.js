// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.


function switcheroo(x){
    let result = '';

    for (var i = 0; i < x.length; i++) {
        if (x[i] === 'a') {
            result += 'b';
        } else if (x[i] === 'b') {
            result += 'a';
        } else {
            result += 'c';
        }
    }
    return result;
}



console.log(switcheroo('aaabcccbaaa')); //, 'bbbacccabbb')