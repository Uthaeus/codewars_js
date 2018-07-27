// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



function duplicateCount(text){
  //...
  text = text.toLowerCase();
  let firsts = [], dups = [];

  for (var i = 0; i < text.length; i++) {
    if (firsts.includes(text[i])) {
      if (!dups.includes(text[i])) {
        dups.push(text[i]);
      }
    } else {
      firsts.push(text[i]);
    }
  }
  return dups.length;
}


console.log(duplicateCount("Indivisibilities")) //, 2)