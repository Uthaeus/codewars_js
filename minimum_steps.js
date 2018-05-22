// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.


function minimumSteps(numbers, value){
  //your code here
  
  var count = 0;
  var nums = numbers.sort(function(a, b){
    return a - b;
  })
  var total = nums[0]
  for (var i = 1; total < value; i++) {
    
    total += nums[i];
    count++;
  }
  return count;
}



console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464)) //, 8)
console.log(minimumSteps([4,6,3], 2)) //, 0))