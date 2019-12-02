// Sort the given strings in alphabetical order, case insensitive. For example:


sortme = function( names ){
  return names.sort((a, b) => {
    return a.toUpperCase() > b.toUpperCase();
  })
}



let a = ["Hello", "there", "I'm", "fine"];
let b = ["C", "d", "a", "B"];

// console.log(sortme(a)); // ["fine", "Hello", "I'm", "there"]
console.log(sortme(b)); // ["a", "B", "C", "d"]