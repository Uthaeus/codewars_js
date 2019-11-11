// Your task is to add up letters to one letter.


function addLetters(...letters) {
  let alph = "_abcdefghijklmnopqrstuvwxyz";
  let total = 0;

  for (let x = 0; x < letters.length; x++) {
    total += alph.indexOf(letters[x]);
  }
  return total % 26 < 1 ? 'z' : alph[total % 26]
}


console.log(addLetters('a', 'b', 'c')); // 'f'
console.log(addLetters('y', 'c', 'b')); //, 'd'))
console.log(addLetters('z')); // 'z'