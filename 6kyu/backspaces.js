// Assume "#" is like backspace in string. This means that string "a#bc#d" actually is "bd"


function clean_string(s) {
    let result = '';

    for (var x = 0; x < s.length; x++) {
        if (s[x] == '#') {
            result = result.slice(0, result.length - 1);
        } else {
            result += s[x];
        }
    }
    return result;
};



console.log(clean_string('abc#d##c')); //, "ac")
console.log(clean_string('abc####d##c#')); //, "")