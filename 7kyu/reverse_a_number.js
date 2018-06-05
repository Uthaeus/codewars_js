// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.


function reverseNumber(n) {
  // ...
  if (n < 0) {
    var strArr = n.toString().split('');
    strArr.shift()
    var nums = strArr.reverse().join('')
    return +nums * -1;
  } else {
    var numArr = n.toString().split('').reverse().join('')
    return +numArr;
  }

}




console.log(reverseNumber(1000)) //, 1, 'Should handle numbers ending with "0")
console.log(reverseNumber(-123)) //, -321, 'Negative Numbers should be preserved)