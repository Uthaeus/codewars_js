// Create a function close_compare that accepts 3 parameters: a, b, and margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

// When a is lower than b, return -1.

// When a is higher than b, return 1.

// When a is close to b, return 0.

// If margin is not given, treat it as zero.


function closeCompare(a, b, margin){
  // ...
  let diff = a > b ? a - b : b - a;

  if (margin >= diff) {
    return 0;
  }
  return a > b ? 1 : -1;
}



console.log(closeCompare(2, 5, 3)) //, 0)