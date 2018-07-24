// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".



function longestConsec(strarr, k) {
    // your code
  if (strarr.length == 0 || strarr.length < k || k < 1) {
    return '';
  }
  var lengths = [];
  var maxes = [];
  var temp, ind;
  var result = [];

  for (var i = 0; i < strarr.length; i++) {
    lengths.push(strarr[i].length);
  }

  do {
    temp = Math.max(...lengths);
    ind = lengths.indexOf(temp);
    lengths.splice(ind, 1);
    result.push(strarr[ind]);
    strarr.splice(ind, 1);
  } while (result.length < k);

  return result.join('');
}



console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) //, "abigailtheta")

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) //, "oocccffuucccjjjkkkjyyyeehh")