// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.


function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}



console.log(cookingTime(5)); //, 10, '10 eggs')