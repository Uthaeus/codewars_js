//  Your task is to find the kth symbol (indexing from 1) in the string S(26). All strings consist of lowercase letters only.


function abacaba(k) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let strs = [];

  for (let i = 1; i < alph.length; i++) {
    let head = alph.slice(0, i);
    let body = alph[i];
    let tail = head.split('').reverse().join('');
    strs.push(head + body + tail);
  }
  let mystring = strs.join('');
  console.log(mystring);
  return mystring[k];
}



console.log(abacaba(16)); //,"e")