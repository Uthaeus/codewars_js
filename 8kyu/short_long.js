// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).


function solution(a, b){
  // your code here
  let s = a.length < b.length ? a : b;
  let l = a.length > b.length ? a : b;

  return s + l + s;
}



console.log(solution('', 'aa'));
console.log(solution("1", "22")); // returns "1221")