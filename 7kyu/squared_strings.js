// Task:

// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)


function vertMirror(strng) {
  let strArr = strng.split(/\n/);
  let strs = [];
  
  for (let str in strArr) {
    let temp = strArr[str].split('').reverse().join('');
    strs.push(temp);
  }
  return strs.join('\n');
}
function horMirror(strng) {
  let strArr = strng.split(/\n/);
  return strArr.reverse().join('\n');
}
function oper(fct, s) {
  return fct(s);
}



console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")); 
//, "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP")
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")); 
//, "cEYz\nLPKo\ndbrZ\nnjMK")