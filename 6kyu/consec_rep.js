// For a given string s find the character c (or C) with longest consecutive repetition and return


function longestRepetition(s) {
  let arr = s.split('');
  let longest = 0;
  let longestChar = '';
  let current = 0;

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] == arr[x - 1]) {
      current++;
    } else {
      current = 1;
    }
    if (current > longest) {
      longest = current;
      longestChar = arr[x];
    }
  }
  return [longestChar, longest];
}


console.log(longestRepetition("cbdeuuu900")) //,  ["u",3])
console.log(longestRepetition("bbbaaabaaaa")) //, ["a",4])