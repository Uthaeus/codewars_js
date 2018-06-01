// Find the sum of all multiples of n below m


function sumMul(n,m){
//your idea here
  resultArr = []
  if (m < n) {
    return "INVALID";
  }
  for (var i = 1; i < m; i++) {
    if (i % n == 0) {
      resultArr.push(i);
    }
  }
  result = resultArr.reduce(function(a, b) {
    return a += b;
  });
  return result;
}



console.log(sumMul(4,-7)) //,"INVALID")
console.log(sumMul(2,9)) //,20))