// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

// If there is punctuation, it should be interpreted as a regular character; no special rules.

// If there is spacing before/after the input string, leave them there.

// String will not be empty.


function reverser(sentence) {
  var arr = sentence.split(' ');
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].split('').reverse().join(''));
  }
  return result.join(' ');
}



console.log(reverser("friendzone")) //, 'enozdneirf')
console.log(reverser("Hi mom")) //, 'iH mom')