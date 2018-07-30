// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// 1mi = 1.60934km
// 1g = 3.78541l


function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  return ((mpg / 4.54609188) * 1.609344).toFixed(2);
}



console.log(converter(30)) //, 10.62)