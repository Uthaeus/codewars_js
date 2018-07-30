// Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.


function logicalCalc(array, op){
  //your code here
  var op = {AND:"&&",OR:"||",XOR:"!="}[op];
  return array.reduce((a,b)=>eval(`${a}${op}${b}`));
}



console.log(logicalCalc([true, false, false, false], "AND")) //, false)