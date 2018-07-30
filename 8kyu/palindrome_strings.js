// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.


function isPalindrome(line) {
  return line.toString().toLowerCase().split('').reverse().join('') == line.toString().toLowerCase();
}



console.log(isPalindrome("anna")) //, true)
console.log(isPalindrome(12321)) //, true)