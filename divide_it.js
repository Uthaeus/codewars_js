// Instructions
// Output
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.


function isDivideBy(number, a, b) {
  // good luck
  return number % a == 0 && number % b == 0;
}



console.log(isDivideBy(-12, 2, -5)); //, false)