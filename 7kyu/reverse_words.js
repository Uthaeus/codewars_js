// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



function reverseWords(str) {
  // Go for it
  var result = [];
  var wordArr = str.split(' ');
  for (var i = 0; i < wordArr.length; i++) {
    var word = wordArr[i].split('').reverse().join('');
    result.push(word);
  }

  return result.join(' ');
}



console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // === 'ehT kciuq nworb xof spmuj revo eht yzal .god')
console.log(reverseWords('double  spaced  words')) // === 'elbuod  decaps  sdrow')