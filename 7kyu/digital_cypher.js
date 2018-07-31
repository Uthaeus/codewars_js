// Write a function that accepts str string and key number and returns an array of integers representing encoded str.


function encode(str,  n) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let inds = [];
  let nArr = n.toString().split('').map(a => +a);

  for (var i = 0; i < str.length; i++) {
    let temp = alph.indexOf(str[i]) + 1;
    if (i < nArr.length) {
      inds.push(temp + nArr[i]);
    } else {
      let nInd = i % nArr.length;
      inds.push(temp + nArr[nInd]);
    }
  }
  return inds;
}



console.log(encode("masterpiece",1939)) // , [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
console.log(encode("scout",1939)) // , [ 20, 12, 18, 30, 21])