// Write a function which takes a list of strings and returns each line prepended by the correct number


var number=function(array){
  let result = [];

  for (let x = 1; x <= array.length; x++) {
    let temp = `${x}: ${array[x - 1]}`
    result.push(temp)
  }
  return result;
}



console.log(number(["a", "b", "c"])) //, ["1: a", "2: b", "3: c"], 'Return the correct line numbers')