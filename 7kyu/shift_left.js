// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character


function shiftLeft(s, t){
  let total = s.length + t.length;

  for (let x = 0; x < total; x++) {
    if (s == t) {
      return x;
    }
    if (s.length >= t.length) {
      s = s.slice(1);
    } else {
      t = t.slice(1);
    }
  }
  return total;
}



console.log(shiftLeft("test", "west")); //, 2)
console.log(shiftLeft("test", "yes")); //, 7)
console.log(shiftLeft("b", "ab")); //, 1)