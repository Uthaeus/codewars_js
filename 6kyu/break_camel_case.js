// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
    let result = '';
    for (let x = 0; x < string.length; x++) {
        if (string.charCodeAt(x) >= 65 && string.charCodeAt(x) <= 90) {
            result += ' ';
            result += string[x];
        } else {
            result += string[x];
        }
    }
    return result;
}


console.log(solution('camelCasingTest')); //, 'camel Casing Test')