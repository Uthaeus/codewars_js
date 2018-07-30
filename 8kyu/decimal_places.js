// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


function twoDecimalPlaces(n) {
  // Your code here
  return (Math.round(n * 100) / 100).toFixed(2)
}



console.log(twoDecimalPlaces(2.675)) //, 2.68, "worked for 2.675")