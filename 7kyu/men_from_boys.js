// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys  !alt !alt

// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists . !alt

// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).


function menFromBoys(arr){
  //your code here
  var evens = [];
  var odds = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && !evens.includes(arr[i])) {
      evens.push(arr[i]);
    } else if (arr[i] % 2 != 0 && !odds.includes(arr[i])) {
      odds.push(arr[i]);
    }
  }
  evens.sort(function(a, b) {
    return a - b;
  });
  odds.sort(function(a, b) {
    return b - a;
  })
  var result = evens.concat(odds);
  return result;
}




console.log(menFromBoys([20,33,50,34,43,46])) //, [20,34,46,50,43,33])
console.log(menFromBoys([-53,-26,-53,-27,-49,-51,-14])) //, [-26,-14,-27,-49,-51,-53])