// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:


function solve(s, k){
    //..
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let alphCount = 0;

  // while (s.length > 0) {
  //   for (var i = 0; i < s.length; i++) {
  //     if (s[i] == alph[alphCount]) {
  //       s = s.slice(0, i) + s.slice(i + 1);
  //       k--;
  //       break;
  //     }
  //     if (k === 0) {
  //       return s;
  //     }
  //   }
  //   if (!s.includes(alph[alphCount])) {
  //     alphCount++;
  //   }
  // }
  // return s;

  while (s.length > 0 && k > 0) {
    if (!s.includes(alph[alphCount])) {
      alphCount++;
    } else {
      s = s.replace(alph[alphCount], '');
      k--;
    }
  }
  return s;
}



// console.log(solve('abracadabra', 2)) //,'brcadabra')
// console.log(solve('abracadabra', 50)) //,'')


console.log(solve('cccaabababaccbc', 3));
// Expected: 'cccbbabaccbc', instead got: 'cccabbbaccbc'