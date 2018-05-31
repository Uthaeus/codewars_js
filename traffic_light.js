// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.


function updateLight(current) {
  //your code here!
  var result;
  switch(current) {
    case 'green':
    result = 'yellow';
    break;
    case 'yellow':
    result = 'red';
    break;
    case 'red':
    result = 'green';
    break;
  }
  return result;
}



console.log(updateLight('green')) // 'yellow'
console.log(updateLight('red')) // 'green'