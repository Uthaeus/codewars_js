// Given and array of integers (x), return the result of multiplying the values together in order. 


function grow(x){
  return x.reduce((a, b) => a *= b);
}



console.log(grow([2, 2, 2, 2, 2, 2])) //, 64)