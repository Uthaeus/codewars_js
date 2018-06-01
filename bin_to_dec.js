// Complete the function which converts a binary number (given as a string) to a decimal number.


function binToDec(bin){
  // ...
  var resultArr = [];
  var numArr = bin.split('').reverse().map(function(a) {
    return +a;
  });
  for (var i = 0; i < numArr.length; i++) {
    var temp = numArr[i] * 2 ** i;
    resultArr.push(temp);
  }
  result = resultArr.reduce(function(a, b) {
    return a += b;
  });
  return result;
}



console.log(binToDec("1001001")); //, 73))
console.log(binToDec('0'));
console.log(binToDec('1'));