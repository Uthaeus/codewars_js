// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!


function contamination(text, char){
  // Code here ;)
  if (!text.length || !char.length) {
    return '';
  }

  let result = '';
  for (var i = 0; i < text.length; i++) {
    result += char;
  }
  return result;
}



console.log(contamination("_3ebzgh4","&")) //, "&&&&&&&&")