// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
  let result = [];
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for (var i = 0; i < a.length; i++) {
    let flag = false;
    for (var j = 0; j < vowels.length; j++) {
      let temp = vowels[j].charCodeAt(0);
      if (a[i] == temp) {
        result.push(vowels[j]);
        flag = true;
      }
    }
    if (!flag) {
      result.push(a[i]);
    }
  }
  return result;
}



console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])) 
// ,[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106])