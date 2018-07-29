// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56





function getNumberFromString(s) {
  let result = ''

  for (var i = 0; i < s.length; i++) {
    temp = s.charCodeAt(i);
    if (temp > 47 && temp < 58) {
      result += s[i];
    }
  }
  return +result;
}



console.log(getNumberFromString("123")) //, 123)
console.log(getNumberFromString("this is number: 7")) //, 7)
console.log(getNumberFromString('0'));