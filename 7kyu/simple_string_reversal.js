// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.


function solve(str){
  let rev = [];
  let answer = '';
  let y = 0;
  
  for (let x = 0; x < str.length; x++) {
    if (str[x] != ' ') {
      rev.unshift(str[x]);
    }
  }

  for (let x = 0; x < str.length; x++) {
    if (str[x] == ' ') {
      answer += ' ';
    } else {
      answer += rev[y];
      y++;
    }
  }

  return answer;
}


// console.log(solve("codewars")); //,"srawedoc");)
console.log(solve("your code rocks")); //,"skco redo cruoy")