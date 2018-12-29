// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string


function firstNonRepeatingLetter(s) {
  let obj = {};

  for (var x = 0; x < s.length; x++) {
    let temp = s[x].toLowerCase();
    if (obj[temp]) {
      obj[temp]++;
    } else {
      obj[temp] = 1;
    }
  }
  for (var x = 0; x < s.length; x++) {
    let temp = s[x].toLowerCase();
    if (obj[temp] === 1) {
      return s[x];
    }
  }
  return "None";
}



console.log(firstNonRepeatingLetter('stress')); //, 't')