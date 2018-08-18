// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:


function solve(s, k){
    //..
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let alphCount = 0;

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