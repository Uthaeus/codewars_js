// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.


function order(words){
    if (words == null || words.length < 1) {
        return "";
    }
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
}



console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //, "Fo1r the2 g3ood 4of th5e pe6ople")