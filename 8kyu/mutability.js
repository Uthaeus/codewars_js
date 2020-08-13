//  Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).


function capitalizeWord(word) {
  word = word.toLowerCase().replace(word[0], word[0].toUpperCase());
  return word;
}


console.log(capitalizeWord('glasswear')); //, 'Glasswear')