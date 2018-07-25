// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.


function always (n) {
  return function() {
    return n;
  }
}



console.log(always(true)()) //, 'A function that is always true will return true')