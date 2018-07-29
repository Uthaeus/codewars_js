// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.


function validateCode (code) {
//your code here
  return /^[1-3]/.test(code);
}



console.log(validateCode(248)) //, true)