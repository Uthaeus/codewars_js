// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

// "2357111317192329313741434753596167717379..."
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a.

// For example, 5 elements from index 10 are: 19232.


function solve(a,b){
  //..
  let len = a + b;
  let str = '2';
  let strArr = [2];
  
  for (var i = 2; ; i++) {
    let flag = true;
    for (var x = 0; x < strArr.length; x++) {
      if (i % strArr[x] === 0) {
        flag = false;
      }
    }
    if (flag) {
      str += i.toString();
      strArr.push(i);
    }
    if (str.length > len) {
      break;
    }
  }
  let result = str.slice(a, len);
  return result;
}



console.log(solve(20,9)); //,'414347535')