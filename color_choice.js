// knowing m (number of posters to design), knowing n (total number of available colors), let us search x (number of colors for each poster so that each poster has a unique combination of colors and the number of combinations is exactly the same as the number of posters).

// In other words we must find x such as n choose x = m (1) for a given m and a given n; m >= 0 and n > 0. If many x are solutions give as result the smallest x. It can happen that when m is given at random there are no x satisfying equation (1) then return -1.



function checkchoose(m, n) {
  // your code
  var initial = 1; 
  var out, flag = false;
  var factorial = num => {   
    var tempArr = [];
    for (var i = 1; i <= num; i++) {
      tempArr.push(i);
    }
    if (tempArr.length < 1) {
      return -1;
    }
    var result = tempArr.reduce(function(a, b) {
      return a *= b;
    });
    return result;
  }
  while (flag == false) {
    var diff = n - initial;
    if (diff == 0) {
      out = -1;
      flag = true;
    }
    var temp = Math.round(factorial(n) / (factorial(initial) * factorial(diff)));  
    console.log(temp); 
    if (temp < m) {
      initial++;
    } else if (temp > m) {
      out = -1;
      flag = true;
    } else if (temp == m) {
      out = initial;
      flag = true;
    }
  } 

  return out;
}


console.log(checkchoose(6, 4)) //, 2))
console.log(checkchoose(86493225, 30)) // 12













