// Write a function that rearranges an integer into its largest possible value.



function superSize(num){
  var numArr = num.toString().split('').map(a => +a);
  var result = numArr.sort((a, b) => b - a).join('');

  return +result;
}



console.log(superSize(69)) //,96