// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.


function last(x){
  return x.split(' ').sort((a, b) => a[a.length - 1] > b[b.length - 1]);
}



console.log(last('take me to semynak')); //, ['take', 'me', 'semynak', 'to'])
console.log(last('what time are we climbing up the volcano'));
//, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])