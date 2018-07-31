// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.


var isAnagram = function(test, original) {
  let myTest = test.toLowerCase().split('').sort().join('');
  let myO = original.toLowerCase().split('').sort().join('');

  return myTest == myO;
};



console.log(isAnagram("Buckethead", "DeathCubeK")) //, true)
console.log(isAnagram("dumble", "bumble")) //, false)