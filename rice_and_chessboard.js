// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.



function squaresNeeded(grains){
  //your code here
  if (grains == 0) {
    return 0;
  }
  var temp = 1;
  var count = 0;

  while (temp <= grains) {
    temp *= 2
    count++
  }
  return count
}




console.log(squaresNeeded(4)) //, 3);
console.log(squaresNeeded(3))