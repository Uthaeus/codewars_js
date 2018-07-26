// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers


function multiply(number){
  //your code here
  let exp = Math.abs(number).toString().length;

  return number * (Math.pow(5, exp));
}


console.log(multiply(10)) //,250