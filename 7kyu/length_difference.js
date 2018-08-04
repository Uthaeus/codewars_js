// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).


function mxdiflg(a1, a2) {
    // your code
  if (a1.length == 0 || a2.length == 0) {
    return -1;
  }

  let a1Arr = a1.map(a => a.length).sort((a, b) => a - b);
  let a2Arr = a2.map(a => a.length).sort((a, b) => a - b);
  let maxdiff = Math.abs(a1Arr[0] - a2Arr[a2Arr.length - 1]);
  let compare = Math.abs(a1Arr[a1Arr.length - 1] - a2Arr[0]);

  return maxdiff > compare ? maxdiff : compare;
}




var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2)) //, 13)