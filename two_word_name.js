// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F



function abbrevName(name){
    // code away
  var arr = name.toUpperCase().split(' ');
  var inits = [arr[0][0], arr[1][0]];
  return inits.join('.');
}



console.log(abbrevName("Sam Harris")) //, "S.H"))
console.log(abbrevName("David Mendieta")) //, "D.M"))