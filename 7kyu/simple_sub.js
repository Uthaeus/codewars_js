// In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:


function solve(a,b){
    //..

  while (a >= 2 * b || b >= 2 * a) {
    if (a === 0 || b === 0) {
      return [a, b];
    }

    if (a >= 2 * b) {
      a -= 2 * b;
    }

    if (b >= 2 * a) {
      b -= 2 * a;
    }
  }
  return [a, b];
}



console.log(solve(2,1)); //,[0,1])
console.log(solve(6,19)) //,[6,7])