// Your task: Define a function which takes 3 arguments: the length a , width b, and height c of the bugs world, and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers.
// d = 


function shortestDistance(a, b, c) {
  // Your code here
  let arr = [a, b, c].sort((x, y) => x - y);
  let [base, height, length] = arr;
  let result = Math.sqrt(Math.pow(length, 2) + Math.pow(base, 2) + Math.pow(height, 2) + (2 * base * height));

  return result;
}



console.log(shortestDistance(1, 2, 3)); //, 4.242640687119285)
console.log(shortestDistance(134, 191.5, 45.5)); //, 262.47380821712477)