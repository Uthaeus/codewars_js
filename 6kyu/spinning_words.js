// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(s){
    let wordArr = s.split(' ');
    let result = [];

    for (var x = 0; x < wordArr.length; x++) {
        let temp = wordArr[x];
        if (temp.length >= 5) {
            temp = temp.split('').reverse().join('');
        }
        result.push(temp);
    }
    return result.join(' ');
}



console.log(spinWords("Hey fellow warriors")); //, "Hey wollef sroirraw")