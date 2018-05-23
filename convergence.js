// Consider the following series:

// 1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

// It is generated as follows:

// For single digit integers, add the number to itself to get the next element.
// For other integers, multiply all the non-zero digits and add the result to the original number to get the next element.
// For example: 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.


function convergence(n){
  var output = 0;
  var genList = (num) => {
    var result = [num];
    var x = 0;

    var eval = (nu) => {
      var tempRes = [];
      var numRes = nu.toString().split('').map(function(a) {
        return +a;
      });

      if (numRes.length == 1) {
        return numRes[0] * 2
      } else {
        for (var i = 0; i < numRes.length; i++) {
          if (numRes[i] > 0) {
            tempRes.push(numRes[i]);
          }
        }
        var temp = tempRes.reduce(function(a, b) {
          return a *= b;
        })
        return nu + temp
      }
    }

    result.push(eval(result[x]));

    return result;
  }
  var count = 0;
  var base = genList(1);
  var test = genList(n);
  var b = base.length - 1;
  var t = 0;

  while (base[b] <= test[t]) {
    base[b + 1] = genList(base[b]);
    count++;
  }

  return count;
}


console.log(convergence(10)) //, 5);)
console.log(convergence(15)) //, 2);
console.log(convergence(5000)) //, 283))















