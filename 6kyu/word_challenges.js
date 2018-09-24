// You will be provided with a list of words, WORD_LIST(python/crystal), wordList(javascript), $word_list(ruby), and you have to create the function, wanted_words(), that receives the three arguments in the order given above, wanted_words(n, m, forbid_list)and output an array with the word or an array, having the words in the order given in the pre-loaded list, in the case of two or more words were found.


function wantedWords(n, m, forbid_let){
    let result = [];
    let cons = 'bcdfghjklmnpqrstvwxyz';
    let vows = 'aeiou';
    let consCount = 0, vowsCount = 0;

    for (let x = 0; x < wordList.length; x++) {
        let flag = true;
        for (let j = 0; j < forbid_let.length; j++) {
            if (wordList[x].includes(forbid_let[j])) {
                flag = false;
            }
        }

        for (let i = 0; i < wordList[x].length; i++) {
            if (cons.includes(wordList[x][i])) {
                consCount++;
            } else if (vows.includes(wordList[x][i])) {
                vowsCount++;
            }
        }
        if (flag) {
            if (vowsCount == n && consCount == m) {
                result.push(wordList[x]);
            }
        }
    }
    return result;
}



