// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }


function count (string) {  
    // The function code should be here
    let result = {};

    for (letter in string) {
        if (result[string[letter]]) {
            result[string[letter]] += 1;
        } else {
            result[string[letter]] = 1;
        }
    }
    return result;
}



console.log(count("aba")); //, { a: 2, b: 1 })
console.log(count("")); //, {})