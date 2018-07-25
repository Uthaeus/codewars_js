// PROBLEM:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// WHAT TO DO:
// Make a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.


function sixToast(num) {
  // you code here
  return num > 6 ? num - 6 : 6 - num;
}



console.log(sixToast(17)) //, 11)
console.log(sixToast(6)) //, 0)