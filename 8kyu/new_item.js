// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)


function addExtra( listOfNumbers ){
    // your code here
    // add an int to listOfNumbers and return it
  let num = Math.floor(Math.random() * 10) + 1;
  return [...listOfNumbers, num];
}


var arr = [1,2,3];
console.log(addExtra(arr)) //,arr