// In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.


function solve(n){
    //..
  var x = Math.floor(n * 0.95);
  var highest = 0;
  var largest = [];
  const getSum = num => {
    var sumArr = num.toString().split('').map(function(a) {
      return +a;
    });
    var sumSum = sumArr.reduce(function(a, b) {
      return a += b;
    });
    return sumSum;
  }
  while (x <= n) {
    var tempSum = getSum(x);
    if (tempSum >= highest) {
      highest = tempSum;
      largest.push(x);
    }
    x++
  }
  return largest[largest.length - 1];
    
}



console.log(solve(72694)) //,69999)
console.log(solve(59195)) //,58999))