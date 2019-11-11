// The input will always be in lowercase and never be empty.


function wordsToMarks(string){
  let sum = 0;

  for (let x = 0; x < string.length; x++) {
    sum += string.charCodeAt(x) - 96;
  }

  return sum;
}



console.log(wordsToMarks("attitude")); //, 100)