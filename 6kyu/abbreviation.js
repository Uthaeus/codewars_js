// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:


function abbreviate(string) {
    let arr = string.split(/[ -]/);
    let result = [];
    
    for(let x = 0; x < arr.length; x++) {
        if (arr[x].length > 3) {
            let temp = arr[x][0] + (arr[x].length - 2).toString() + arr[x][arr[x].length - 1];
            result.push(temp);
        } else {
            result.push(arr[x]);
        }
    }
    return result.join(/[ -]/);
}


console.log(abbreviate("Accessibility")); //, "A11y"
console.log(abbreviate("elephant-ride")); //, "e6t-r2e"