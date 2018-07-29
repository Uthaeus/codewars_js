// In this Kata you should try to fix all the syntax errors found in the code.

// Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

// Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.


function myFirstKata(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
  } else {
    return (b % a) + (a % b);
  }
  
}



console.log(myFirstKata(314,107)) //,(107 % 314 + 314 % 107))