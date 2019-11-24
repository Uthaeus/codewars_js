// your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.


function solve(st) {
   let resultHash = {}, result = [], diffs = [], max = 0;

   for (let x = 0; x < st.length; x++) {
     if (resultHash[st[x]]) {
       resultHash[st[x]].push(x);
     } else {
       resultHash[st[x]] = [x];
     }
   }

   for (let key in resultHash) {
     let temp = resultHash[key][resultHash[key].length - 1] - resultHash[key][0];
     resultHash[key] = temp;
     if (temp > max) {
       max = temp;
     }
   }

   for (let key in resultHash) {
     if (resultHash[key] >= max) {
       result.push(key);
     }
   }

   return result.sort()[0];
}



console.log(solve('axyzxyz')); //, 'x')
console.log(solve('aabccc')); //, 'c')