// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function GetSum( a, b ) {
   //Good luck!
  let temp = [];
  if (a == b) {
    return a;
  } else if (a > b) {
    for (var i = b; i <= a; i++) {
      temp.push(i);
    }
  } else {
    for (var i = a; i <= b; i++) {
      temp.push(i);
    }
  }
  result = temp.reduce(function(a, b) {
    return a += b;
  });
  return result;
}



console.log(GetSum(0,-1)) //,-1))