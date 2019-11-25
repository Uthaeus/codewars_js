// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
  return +n.toString().split('').sort((a, b) => b - a).join('');
}



console.log(descendingOrder(123456789)); //, 987654321)