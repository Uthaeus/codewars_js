// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase();
}


console.log(isPalindrome("Abba")); //, true