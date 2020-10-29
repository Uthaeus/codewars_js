// Remove all exclamation marks from the end of sentence.


function remove(s){
    while (s[s.length - 1] == '!') {
        s = s.slice(0, s.length - 1);
    }
    return s
}



console.log(remove("Hi! Hi!")); // , "Hi! Hi"