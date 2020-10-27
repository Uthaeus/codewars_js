// Remove n exclamation marks in the sentence from left to right. n is positive integer.




function remove(s,n){
    let result = '';

    for (let x = 0; x < s.length; x++) {
        if (s[x] == '!' && n >= 1) {
            result += '';
            n--;
        } else {
            result += s[x];
        }
    }
    return result;
}


console.log(remove("!!!Hi !!hi!!! !hi",1)); // , "!!Hi !!hi!!! !hi"